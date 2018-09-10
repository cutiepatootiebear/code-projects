import React, { Component } from "react";
import { connect } from "react-redux";
import ProtoTypes from "prop-types";

class LargeQuestionView extends Component {
  constructor(props) {
    super();
    let questionId = props.match.params.questionId;
    console.log(props);
    console.log("questiond id ", questionId);
    let question = props.trivia.find(q => q.id == questionId);
    this.state = { question };
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.props);
  }

  showAnswer(id) {
    this.context.router.history.push(`/${id}/answer`);
    console.log("id", id);
  }

  goToAnswer() {
    this.props.history.push(`/${this.state.questionId}/answer`);
  }
  render() {
    const {
      question,
      category,
      difficulty,
      incorrect_answers,
      correct_answer,
      id
    } = this.state.question;
    const answers = incorrect_answers.map(ans => {
      return (
        <li onClick={() => this.showAnswer(id)} className="questionLi">
          <div className="circle"> </div>
          {ans}
        </li>
      );
    });

    return (
      <div className="questionView">
        <div>{question}</div>
        <ul className="questionUl">
          {answers}
          <li onClick={() => this.showAnswer(id)} className="questionLi">
          <div className="circle"> </div>
          {correct_answer} </li>
        </ul>
        {/* <div>{correct_answer}</div> */}
      </div>
    );
  }
}

LargeQuestionView.contextTypes = {
  router: ProtoTypes.object.isRequired
};

export default connect(state => {
  return {
    trivia: state.trivia
  };
})(LargeQuestionView);
