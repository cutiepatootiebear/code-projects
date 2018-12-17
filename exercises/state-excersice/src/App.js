import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor() {
   super()
   this.state = {
     counter: 1
   }
 }
   //This is the method you are creating to add one to your counter
subtractNum = () => {
  //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
  this.setState(prevState => {
    // return will return the new state
    return {
      counter: prevState.counter - 1
    }
  })
}


addNum = () => {
  this.setState(prevState => {
    return {
      counter: prevState.counter + 1
    }
  })
}

reset = () => {
  this.setState({counter: 0})
}



render() {
  return (
    <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.addNum}>+</button>
      <button onClick={this.subtractNum}> - </button>
      <button onClick={this.reset}> reset </button>
    </div>
  )
}

}




export default App;
