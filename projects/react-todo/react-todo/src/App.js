import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Header-text">React to-do list</h1>
          <input type="checkbox" />
          <p>Placeholder text here</p>
          <input type="checkbox" />
          <p>Placeholder text here</p>
          <input type="checkbox" />
          <p>Placeholder text here</p>
          <input type="checkbox" />
          <p>Placeholder text here</p>
        </header>
      </div>
    );
  }
}

export default App;
