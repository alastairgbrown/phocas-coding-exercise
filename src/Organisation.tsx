import React, { Component } from 'react';
import { Board } from './Board';
import { GraphQLProcessor, IGraphQLResult } from './GraphQLInterface';
import { IBoard, IOrganisation } from './Interfaces';

export class Organisation extends Component<{
    organisationId: string
}, {
    organisation?: IOrganisation
    boards?: IBoard[]
}>{
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public get organisation(): IOrganisation {
        return this.state.organisation as IOrganisation
    }
    public get boards(): IBoard[] {
        return this.state.boards as IBoard[]
    }

    public requery() {
        GraphQLProcessor({
            query:
                `query organisation($organisationId: ID!) {
                    organisation(organisationId: $organisationId) {
                        id
                        name
                        timezone
                        createdAt
                        updatedAt
                        boards {
                            id
                            name
                            createdAt
                            updatedAt
                            tickets {
                                id
                                name
                                description
                                visible
                                status
                                createdAt
                                updatedAt
                            }
                        }
                    }
                  }`,
            variables: { organisationId: this.props.organisationId }
        }).then((result: IGraphQLResult) => {
            const organisation = result.data.organisation as IOrganisation
            this.setState({ organisation, boards: organisation.boards })
        })
    }

    public componentDidMount() {
        this.requery()
    }

    public render() {
        if (!this.state.organisation || !this.state.boards) {
            return <div>Loading...</div>
        }

        const newBoard: IBoard = { id: "", name: "", createdAt: "", updatedAt: "", tickets: [] }
        const onNewBoard = () => this.setState({ boards: [...this.boards, newBoard] })

        return (
            <table style={{ border: "solid 1px black" }}>
                <tbody>
                    <tr><th title={this.organisation.id}>Organisation: </th><td>{this.organisation.name}</td></tr>
                    <tr><th>Timezone: </th><td colSpan={2}>{this.organisation.timezone}</td></tr>
                    <tr><th>Created At: </th><td colSpan={2}>{this.organisation.createdAt}</td></tr>
                    <tr><th>Updated At: </th><td colSpan={2}>{this.organisation.updatedAt}</td></tr>
                    <tr>
                        <th>Boards: </th>
                        <td>{this.boards.length}</td>
                        <td style={{ textAlign: 'right' }}>
                            <button onClick={onNewBoard} title='New board'>✨</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>
                            <div style={{ marginLeft: "10mm" }}>
                                {this.boards.map((_, i) => <Board key={i} organisation={this} index={i} />)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
