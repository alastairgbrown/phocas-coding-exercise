import { IBoard, IOrganisation, ITicket } from "./Interfaces";
import { uuidv4 } from "./Utilities";

export interface IGraphQLQuery {
    query: string
    variables: { [id: string]: any }
}
export interface IGraphQLResult {
    data: any
    dataPresent: boolean
    extensions: any
}

export function GraphQLProcessor(graphQLQuery: IGraphQLQuery): Promise<any> {

    const processor = new Processor(ParseQuery(graphQLQuery)) as any

    return Promise.resolve(processor.execute())
}

function ParseQuery(graphQLQuery: IGraphQLQuery): IGraphQLQueryNode {
    const { query, variables } = graphQLQuery
    const parser = /[{}():,]|"(\\.|[^"])*"|[-A-Z0-9$]+!?|#.*\n/ig
    const root: IGraphQLQueryNode[] = []
    const stack: IGraphQLQueryNode[][] = [root]
    let match: RegExpExecArray | null;

    while ((match = parser.exec(query)) !== null) {
        const value = match[0]
        const top = stack[stack.length - 1]
        switch (value[0]) {
            case '{':
                stack.push(top[top.length - 1].children)
                break
            case '(':
                stack.push(top[top.length - 1].args)
                break
            case '}':
            case ')':
                stack.pop()
                break
            case ':':
            case ',':
                top[top.length - 1].expectingValue = value === ':'
                break
            case '#':
                break
            default:
                if (top.length && top[top.length - 1].expectingValue) {
                    switch (value[0]) {
                        case '$':
                            top[top.length - 1].value = variables[value.substr(1)]
                            break
                        case '"':
                            top[top.length - 1].value = value.substr(1, match.length - 2)
                            break
                        default:
                            top[top.length - 1].value = value
                    }
                } else {
                    top.push({ name: value, value: '', children: [], args: [] })
                }
        }
    }

    const body = root[1].children[0]

    return body
}

interface IGraphQLQueryNode {
    name: string
    value: any
    children: IGraphQLQueryNode[]
    args: IGraphQLQueryNode[]
    expectingValue?: boolean
}

interface IDatabase {
    organisations: IOrganisation[]
}

const defaultData: IDatabase = {
    organisations: [
        {
            id: '806fb7b1-64fb-4ec1-853b-f4ac7554cc64',
            name: 'example',
            timezone: 'Pacific/Auckland',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            boards: []
        }
    ]
}

class Processor {

    database: IDatabase
    args: { [id: string]: string }
    body: IGraphQLQueryNode

    constructor(body: IGraphQLQueryNode) {
        this.database = JSON.parse(window.localStorage.getItem('data') || JSON.stringify(defaultData))
        this.args = {}
        this.body = body
        body.args.forEach(a => this.args[a.name] = a.value)
    }

    public execute() {
        return (this as any)[`${this.body.name}_operation`]()
    }

    saveData() {
        window.localStorage.setItem('data', JSON.stringify(this.database))
    }

    get organisation(): IOrganisation {
        return this.database.organisations.find((o: any) => o.id === this.args.organisationId) as IOrganisation
    }

    get board(): IBoard {
        return this.organisation.boards.find((b: any) => b.id === this.args.boardId) as IBoard
    }

    deleteBoard_operation(): IGraphQLResult {
        const organisation = this.organisation
        const returnValue = this.board_operation()

        organisation.boards = organisation.boards.filter((b: any) => b.id !== this.args.boardId)
        this.saveData()

        return returnValue
    }

    deleteTicket_operation(): IGraphQLResult {
        const organisation = this.organisation
        const returnValue = this.ticket_operation()
        organisation.boards.forEach((b: any) => b.tickets = b.tickets.filter((t: any) => t.id !== this.args.ticketId));
        this.saveData()
        return returnValue
    }

    putBoard_operation(): IGraphQLResult {
        const organisation = this.organisation
        const boards: IBoard[] = organisation.boards
        const input: IBoard = this.args.input as unknown as IBoard
        let index: number

        if ((this.args.boardId || "") === "") {
            index = boards.length
            boards.push({ ...input, id: uuidv4(), tickets: [], createdAt: new Date().toISOString() })
        } else {
            index = boards.findIndex(b => b.id === this.args.boardId)
            boards[index] = { ...boards[index], ...input }
        }

        boards[index].updatedAt = new Date().toISOString()

        this.saveData()

        return { data: { board: boards[index] }, dataPresent: true, extensions: null }
    }

    putTicket_operation(): IGraphQLResult {
        const board = this.board
        const tickets = board.tickets
        const input: ITicket = this.args.input as unknown as ITicket
        let index: number

        if ((this.args.ticketId || "") === "") {
            index = tickets.length
            tickets.push({ ...input, id: uuidv4(), createdAt: new Date().toISOString() })
        } else {
            index = tickets.findIndex((t: any) => t.id === this.args.ticketId)
            tickets[index] = { ...tickets[index], ...input }
        }

        tickets[index].updatedAt = new Date().toISOString()

        this.saveData()

        return { data: { ticket: tickets[index] }, dataPresent: true, extensions: null }
    }
    
    organisation_operation(): IGraphQLResult {
        return { data: { organisation: this.organisation }, dataPresent: true, extensions: null }
    }
    
    board_operation(): IGraphQLResult {
        return { data: { board: this.board }, dataPresent: true, extensions: null }
    }
    
    ticket_operation(): IGraphQLResult {
        const organisation = this.organisation
        const tickets = organisation.boards.flatMap((b: any) => b.tickets)
        const ticket = tickets.find((t: any) => t.id === this.args.ticketId)

        return { data: { ticket }, dataPresent: true, extensions: null }
    }
    
    resetDatabase_operation(): IGraphQLResult {
        this.database = defaultData
        this.saveData()
        return { data: 'is reset', dataPresent: true, extensions: null }
    }
}