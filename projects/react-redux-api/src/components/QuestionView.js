import React, { Component } from "react";

class QuestionView extends Component {
  constructor(props) {
    console.log("props => ", props);
    super(props);
    this.state = {
      ask: false
    };
  }
  changeAsk = e => {
    this.setState({
      ask: true
    });
    this.props.history.push(`/${this.props.questionId}`);
  };
  render() {
    const { props } = this;
    return (
      <div className="cardContainer" onClick={this.changeAsk}>
        <div className="cardPoints">
          {/* props.questionAsked will come from QuestionList's State */}
          {this.state.ask ? (
            <h2>{props.question}</h2>
          ) : (
            <h2>{props.difficulty}</h2>
          )}
          {/* <button className="showQuestion"></button> */}
        </div>
      </div>
    );
  }
}

export default QuestionView;

// this.props.trivia.viewed ? <span>symbol</span>
/**
 * Each router creates a history object, which it uses to keep track of the current location[1]
 * and re-render the website whenever that changes. The other components provided by React Router
 * rely on having that history object available through React’s context, so they must be rendered as 
 * descendants of a router component.
 * 
 * A React Router component that does not have a router as one of its ancestors will fail to work.
 * */
