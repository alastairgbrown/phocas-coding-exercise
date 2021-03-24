import React, { Component } from 'react';
import { Organisation } from './Organisation';
import { GraphQLProcessor } from './GraphQLInterface';
import { IBoard, ITicket } from './Interfaces';
import { Ticket } from './Ticket';

export class Board extends Component<{
    organisation: Organisation
    index: number
}, {
    editing: boolean
}>{
    constructor(props: any) {
        super(props)
        this.state = { editing: this.board.id === "" }
    }

    get organisation(): Organisation {
        return this.props.organisation
    }
    get board(): IBoard {
        return this.props.organisation.boards[this.props.index]
    }

    public render() {
        const newTicket: ITicket = { name: '', description: '', visible: true, status: 'TODO', id: '', createdAt: '', updatedAt: '' }
        const onDelete = () => {
            if (window.confirm('are you sure you want to delete?')) {
                GraphQLProcessor({
                    query:
                        `mutation deleteBoard($organisationId: ID!, $boardId: ID!) {
                            deleteBoard(organisationId: $organisationId, boardId: $boardId) {
                                id
                            }
                        }`,
                    variables: {
                        organisationId: this.organisation.organisation.id,
                        boardId: this.board.id
                    }
                }).then(() => this.organisation.requery())// this is the simplest way to update the state
            }
        }
        const onSave = () => {
            GraphQLProcessor({
                query:
                    `mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
                        putBoard(organisationId: $organisationId, boardId: $boardId, input: $input) {
                          id
                        }
                      }`,
                variables: {
                    organisationId: this.organisation.organisation.id,
                    boardId: this.board.id,
                    input: this.board
                }
            }).then(() => this.organisation.requery())// this is the simplest way to update the state
            this.setState({ editing: false })
        }
        const update = (values: any) => {
            // make shallow copies of arrays and objects to ensure that react updates all the state properly
            const boards = [...this.organisation.boards]
            const board = { ...this.board }
            boards[this.props.index] = { ...board, ...values }
            this.organisation.setState({ boards })
        }
        const onNewTicket = () => update({ tickets: [...this.board.tickets, newTicket] })
        const onChangeName = (e: any) => update({ name: (e.target as any).value })
        const onEdit = () => this.setState({ editing: true })

        return (
            <table style={{ border: "solid 1px black" }}>
                <tbody>
                    <tr>
                        <th title={this.board.id}>Board: </th>
                        <td>
                            {this.state.editing ?
                                <input type='text' value={this.board.name} onChange={onChangeName} /> :
                                <span>{this.board.name}</span>}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            <button hidden={!this.state.editing} onClick={onSave} title='Save'>💾</button>
                            <button hidden={this.state.editing} onClick={onEdit} title='Edit'>✏️</button>
                            <button hidden={this.state.editing} onClick={onDelete} title='Delete'>❌</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Created At: </th>
                        <td colSpan={2}>{this.board.createdAt}</td>
                    </tr>
                    <tr>
                        <th>Updated At: </th>
                        <td colSpan={2}>{this.board.updatedAt}</td>
                    </tr>
                    <tr>
                        <th>Tickets: </th>
                        <td>{this.board.tickets.length}</td>
                        <td style={{ textAlign: 'right' }}>
                            <button onClick={onNewTicket} title='New ticket'>✨</button>
                        </td>
                    </tr>
                    <tr >
                        <td colSpan={3}>
                            <div style={{ marginLeft: "10mm" }}>
                                {this.board.tickets.map((t, i) => <Ticket key={i} board={this} index={i} />)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}