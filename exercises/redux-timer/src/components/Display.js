import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    // console.log('this is props=> ', props)
    return(
        <div className="container">
        <h1> Hours: {props.hours}  </h1>
        <h1> minutes:  {props.minutes}  </h1>
        <h1> Seconds: {props.seconds}  </h1>
        <h1> ms: {props.milliseconds}  </h1>
        </div>
    )
}

export default connect(state=>state, {})(Display)