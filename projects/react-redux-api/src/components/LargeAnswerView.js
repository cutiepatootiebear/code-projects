import React, { Component } from "react";
import { connect } from "react-redux";
import ProtoTypes from 'prop-types' 

class LargeAnswerView extends Component {
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

  backToHome() {
    this.context.router.history.push(`/`)
}

  render() {
    const { correct_answer } = this.state.question;
    return <div onClick={() => this.backToHome()}> {correct_answer} </div>;
  }
}
LargeAnswerView.contextTypes = {
    router: ProtoTypes.object.isRequired
}

export default connect(state => {
  return {
    trivia: state.trivia
  };
})(LargeAnswerView);
