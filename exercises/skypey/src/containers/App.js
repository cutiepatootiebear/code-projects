import React from "react";
import "./App.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import store from "../store";
import _ from "lodash";

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;

/**
 * 
 * Each type of data should have its own key in the state object.
 * 
• Each key should store the individual items in an object, with the IDs of the 
   items as keys and the items themselves as the values.
• Any references to individual items should be done by storing the item's ID.

• Ideally, keep an array of IDs to indicate ordering.

 */
