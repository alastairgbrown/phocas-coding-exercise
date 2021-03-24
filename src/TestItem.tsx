import React, { Component } from 'react'
import { GraphQLProcessor, IGraphQLQuery } from './GraphQLEmulator'
import { syntaxHighlight } from './Utilities'

export class TestItem extends Component<{
    data: any
}, {
    variables: string
    result: any
    isEditing: boolean
}>
{
    constructor(props: any) {
        super(props)
        this.state = { variables: JSON.stringify(this.query.variables || {}, null, 2), result: '', isEditing: false }
    }

    get query() {
        return JSON.parse(this.props.data.body.text) as IGraphQLQuery
    }

    public render() {

        const onDoubleClick = (e: any) => this.setState({ isEditing: true })
        const onBlur = (e: any) => this.setState({ isEditing: false })
        const onChange = (e: any) => this.setState({ variables: (e.target as any).value })
        const onClick = (e: any) => {
            GraphQLProcessor({ ...this.query, variables: JSON.parse(this.state.variables) })
                .then(result => this.setState({ result }))
        }

        return (
            <div key={this.props.data._id}>
                <pre>{this.query.query}</pre>
                {this.state.isEditing ?
                    <textarea rows={10} cols={100} onChange={onChange} onBlur={onBlur} value={this.state.variables} /> :
                    <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(JSON.parse(this.state.variables)) }}
                        onDoubleClick={onDoubleClick} />}
                <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(this.state.result) }} />
                <button onClick={onClick}>Process</button>
            </div>)
    }
}
