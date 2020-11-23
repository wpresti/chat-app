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
                <dt style={dtStyle}>{userName}</dt>
                <dd style={ddStyle}>{msg}</dd>
            </div>
        )
    }
}

export default Message

const dtStyle = {
    
}

const ddStyle = {
    float: "right",
    background: "#0084ff",
    boarderBottomRightRadius: "10px",
    boarderTopRightRadius: "5px",
    boarderTopLeftRadius: "5px",
    boarderBottomLeftRadius: "5px",
    marginRight: "20px"
}