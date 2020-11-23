import { Component } from 'react';
import './App.css';
import ChatGrid from './components/ChatGrid' 

class App extends Component{
  state = {
    messageList: [{userName: "John", msg: "Hello world1!"},
    {userName: "MrDoe", msg: "Hello world2!"},
    {userName: "test1Usr", msg: "Hello world3!"},
    {userName: "test2Usr", msg: "Hello world4!"},
    {userName: "test1Usr", msg: "Hello world5!"},
    {userName: "test1Usr", msg: "Hello world6!"},
    {userName: "test1Usr", msg: "Hello world7! this is a looooooooooooooooooooooooooooooooogggg msg."},]
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
