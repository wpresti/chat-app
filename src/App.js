import { Component } from 'react';
import './App.css';
import ChatGrid from './components/ChatGrid' 

class App extends Component{
  state = {
    messageList: [{userName: "John", msg: "Hello world!"},
    {userName: "MrDoe", msg: "Hello world!"},
    {userName: "test1Usr", msg: "Hello world!"},
    {userName: "test2Usr", msg: "Hello world!"},
    {userName: "test1Usr", msg: "Hello world!"},
    {userName: "test1Usr", msg: "Hello world!"},
    {userName: "test1Usr", msg: "Hello world!"},]
  }

  render(){
    return (
    <div className="App">
      <ChatGrid messageList={this.state.messageList}></ChatGrid>
    </div>
    );
    
  }
}


export default App;
