export interface IOrganisation {
    id: string
    name: string
    timezone: string
    createdAt: string
    updatedAt: string
    boards: Array<IBoard>
}

export interface IBoard {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    tickets: ITicket[]
}

export interface ITicket {
    id: string
    name: string
    description: string
    createdAt: string
    updatedAt: string
    status: string
    visible: boolean
}