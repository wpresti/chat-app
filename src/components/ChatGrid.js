import React, { Component } from 'react';

class ChatGrid extends Component{

    render(){
        return <div className="grid-container">
                <div className="item1">Header</div>
                <div className="item2">Menu</div>
                <div className="item3">Main</div>  
                <div className="item4">Right</div>
                <div className="item5">Footer</div>
        </div>
    }
}
export default ChatGrid