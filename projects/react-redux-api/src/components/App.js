import React, { Component } from "react";
import { getTrivia } from "../reducers";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./QuestionsList";
import QuestionView from "./QuestionView";
import AnswerView from "./AnswerView";
import QuestionList from './QuestionsList'

class App extends Component {
  componentDidMount() {
    this.props.getTrivia();
  }
  render() {
    return (
      // routes
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={QuestionsList} />
          <Route exact path="/:questionId" component={QuestionView} />
          <Route exact path="/:questionId/answer" component={AnswerView} />
        </Switch> */}

        <h3>app loads and prints data to screen</h3>
        <QuestionList />
        {/* {this.props.trivia.map(trivia => {
      return <h3 key={trivia.id}> {trivia.question}</h3>;
    })} */}
      </div>
    );
  }
}

export default connect(
  state => state,
  { getTrivia }
)(App);

/**
 * @class App
 * @extends {Component}
 *
 *
 *https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
 * get Data from Trivia API
 *
 * connect allows the App conmponent to talk to the store
 * takes two args. 1) function 2) object that has the prop of action creators
 */
