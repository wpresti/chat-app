import React, { Component } from 'react'

export class Message extends Component {
    componentDidMount() {
        console.log("mESSAGE MOUNTED",this.props.msg)
    }
    render() {
        const {userName, msg} = this.props.msg
        console.log("username:", userName, "msg:", msg)
        return (
            <div>
                <dt>{userName}</dt>
                <dd>{msg}</dd>
            </div>
        )
    }
}

export default Message
