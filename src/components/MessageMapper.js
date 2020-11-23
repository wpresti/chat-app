import React, { Component } from 'react'
import Message from './Message'
// map function
export class MessageMapper extends Component {
    render() {
        // return this.props.message.map((msg) => (
        //     console.log(msg)
        // ));
        return this.props.messageList.map((msg) => {
            console.log("MESSAGE MAPPER",msg)
            return <Message msg={msg}></Message>
            // console.log(msg)
        });
        
  
    }
}

export default MessageMapper
