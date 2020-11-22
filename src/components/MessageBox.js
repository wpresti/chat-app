import React, { Component } from 'react'

export class MessageBox extends Component {
    state = {

    }
    //https://stackoverflow.com/questions/29793160/making-unordered-list-scrollable/29793235
    render() {
        return (
            <div style={divContainer}>
                <dl style={detailedList}>
                    <dt>John Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>John Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>John Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>John Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>John Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>Tim Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>Tim Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>Tim Doe</dt>
                    <dd>Hi my name is John Doe</dd>
                    <dt>Tim Doe</dt>
                    <dd>Hi my name is John Doe</dd>
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