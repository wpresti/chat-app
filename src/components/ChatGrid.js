import React, { Component } from 'react';
import MessageBox from './MessageBox';

export class ChatGrid extends Component{

    render(){
        return <div className="grid-container" style={gridContainer}>
                <div className="header" style={Object.assign({}, header, gridElement)}>Header</div>
                <div className="menu" style={Object.assign({}, menu, gridElement)}>Menu</div>
                <div className="main" style={Object.assign({}, main, gridElement)}><MessageBox messageList = {this.props.messageList}></MessageBox></div>  
                <div className="right" style={Object.assign({}, right, gridElement)}>Right</div>
                <div className="footer" style={Object.assign({}, footer, gridElement)}>Footer</div>
        </div>
    }
}
export default ChatGrid

const header = {gridArea: "header"}
const menu = {gridArea: "menu"}
const main = {gridArea: "main"}
const right = {gridArea: "right"}
const footer = {gridArea: "footer"}

const gridContainer = {
    display: "grid",
    gridTemplateAreas: `'header header header header header header'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'menu main main main main right'
    'footer footer footer footer footer footer'`,
    gridGap: "10px",
    backgroundColor: "#2196F3",
    padding: "10px",
    width: "100vw",
    height: "100vh",
    gridTemplateRows: "minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)",
    gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr)"
}

const gridElement = {
    backgroundColor: "rgba(255,255,255,0.8)",
    // textAlign: "center",
    padding: "20px",
    fontSize: "30px",
}
