import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Sidebar from "./Sidebar";

class App extends Component {
  constructor(){
    super()
    const state = {
      user: {
        name: "Jameel Matin",
        email: "jamee@gmail.com",
        profile_pic: "fake profile pic",
        status: "learning cs",
        user_id: ""
      },
      messages: {
        {
          0:is_user_msg: false,
          number: 0,
          text: "hello world"
        }
       
      },
     {
        is_user_msg: true,
        number: 0,
        text: "sup"
      },
    },
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
