import React, { Component } from 'react';
import { Board } from './Board';
import { Organisation } from './Organisation';
import { GraphQLProcessor } from './GraphQLEmulator';
import { ITicket } from './Interfaces';

export class Ticket extends Component<{
    board: Board
    index: number
}, {
    editing: boolean
}>{
    constructor(props: any) {
        super(props)
        this.state = { editing: this.ticket.id === "" }
    }
    get organisation(): Organisation {
        return this.props.board.props.organisation
    }
    get ticket(): ITicket {
        return this.props.board.board.tickets[this.props.index]
    }
    public render() {
        const onDelete = () => {
            if (window.confirm('are you sure you want to delete?')) {
                GraphQLProcessor({
                    query:
                        `mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
                            deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
                                id
                            }
                        }`,
                    variables: {
                        organisationId: this.organisation.organisation.id,
                        ticketId: this.ticket.id
                    }
                }).then(() => this.organisation.requery())
            }
        }
        const onSave = () => {
            GraphQLProcessor({
                query:
                    `mutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {
                        putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {
                          id
                        }
                      }`,
                variables: {
                    organisationId: this.organisation.organisation.id,
                    boardId: this.props.board.board.id,
                    ticketId: this.ticket.id,
                    input: this.ticket
                }
            }).then(() => this.organisation.requery())
            this.setState({ editing: false })
        }

        const update = (values: any) => {
            const boards = [...this.props.board.props.organisation.boards]
            const board = this.props.board.board
            const tickets = [...board.tickets]
            const ticket = { ...this.ticket }
            boards[this.props.board.props.index] = { ...board, tickets }
            tickets[this.props.index] = { ...ticket, ...values }
            this.props.board.props.organisation.setState({ boards })
        }

        const onChangeName = (e: any) => update({ name: (e.target as any).value })
        const onChangeDescription = (e: any) => update({ description: (e.target as any).value })
        const onChangeShow = () => update({ visible: true })
        const onChangeHide = () => update({ visible: false })
        const onChangeTodo = () => update({ status: 'TODO' })
        const onChangeDone = () => update({ status: 'DONE' })
        const onChangeInProgress = () => update({ status: 'INPROGRESS' })
        const onEdit = () => this.setState({ editing: true })

        return (
            <table style={{ border: "solid 1px black" }}>
                <tbody>
                    <tr>
                        <th title={this.ticket.id}>Ticket: </th>
                        <td>
                            {this.state.editing ?
                                <input type='text' value={this.ticket.name} onChange={onChangeName} /> :
                                <span>{this.ticket.name}</span>}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                            <button hidden={!this.state.editing} onClick={onSave} title='Save'>💾</button>
                            <button hidden={this.state.editing} onClick={onEdit} title='Edit'>✏️</button>
                            <button hidden={this.state.editing} onClick={onDelete} title='Delete'>❌</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Description: </th>
                        <td colSpan={2}>
                            {this.state.editing ?
                                <input type='text' value={this.ticket.description} onChange={onChangeDescription} /> :
                                <span>{this.ticket.description}</span>}
                        </td>
                    </tr>
                    <tr>
                        <th>Visible: </th>
                        <td colSpan={2}>
                            {this.ticket.visible ? 'Yes' : 'No'}
                            <button hidden={!this.state.editing} onClick={onChangeShow}>Show</button>
                            <button hidden={!this.state.editing} onClick={onChangeHide}>Hide</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Status: </th>
                        <td colSpan={2}>
                            {this.ticket.status}
                            <button hidden={!this.state.editing} onClick={onChangeTodo}>TODO</button>
                            <button hidden={!this.state.editing} onClick={onChangeDone}>DONE</button>
                            <button hidden={!this.state.editing} onClick={onChangeInProgress}>INPROGRESS</button>
                        </td>
                    </tr>
                    <tr>
                        <th>Created At: </th><td colSpan={2}>{this.ticket.createdAt}</td>
                    </tr>
                    <tr>
                        <th>Updated At: </th><td colSpan={2}>{this.ticket.updatedAt}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
