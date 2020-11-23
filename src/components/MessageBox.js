import React, { Component } from 'react'
import MessageMapper from './MessageMapper'

export class MessageBox extends Component {

    //https://stackoverflow.com/questions/29793160/making-unordered-list-scrollable/29793235
    render() {
        console.log(this.props.messageList)
        return (
            <div style={divContainer}>
                <dl style={detailedList}>
                    <MessageMapper messageList={this.props.messageList}></MessageMapper>
                </dl>
            </div>
        )
    }
}

export default MessageBox

const divContainer = {
    border: "1px solid #000",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    overflowY: "scroll"

}

const detailedList = {
    listStyle: "none",
    width: "100%",
    height: "100%",

    
}