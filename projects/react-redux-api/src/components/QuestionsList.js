import React, { Component } from "react";
import QuestionView from "./QuestionView";
import { connect } from "react-redux";
import { getTrivia } from "../reducers";

class QuestionList extends Component {
  constructor() {
    super();
    this.state = {
      ask: false
    };
  }

  componentDidMount() {
    this.props.getTrivia();
  }

  toggleAsk = () => {
    this.setState(prevState => {
      return {
        ask: !prevState.ask
      };
    });
  };

  pointsRate = difficulty => {
    if (difficulty === "easy") {
      return 100;
    } else if (difficulty === "medium") {
      return 200;
    } else if (difficulty === "hard") {
      return 300;
    } else {
      return 400;
    }
  };

  render() {
    return (
      <div>
        {this.props.trivia.map(trivia => {
          return (
            <QuestionView
              key={trivia.id}
              history={this.props.history} 
              questionId={trivia.id}
              question={trivia.question}
              difficulty={trivia.difficulty}
              ask={this.state.ask}
              toggleAsk={this.toggleAsk}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  state => state,
  { getTrivia }
)(QuestionList);
