import React from "react";
// import { Router, Route, hashHistory, IndexRoute } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
// import { AddGameContainer, GamesContainer } from "./containers";
import { Home, Archive, Welcome, About, Contact } from "./components";

function routes() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/games" component={Archive} />
        {/* <IndexRoute component={GamesContainer} />
        <Route path="add" component={AddGameContainer} /> */}
      </div>
    </BrowserRouter>
  );
}

export default routes;
