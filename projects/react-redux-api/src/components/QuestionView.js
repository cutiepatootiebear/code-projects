import React from 'react'

const QuestionView = props => {
    console.log(props.ask)
    return (
        <div className="cardContainer">
            <div className="cardPoints">
            {/* props.questionAsked will come from QuestionList's State */}
                {props.ask ?
                <h2>{props.question}</h2>
                :
                <h2>{props.difficulty}</h2>
                }
                <button onClick={props.toggleAsk}>Show Question</button>
            </div>
        </div>
    )
}

export default QuestionView