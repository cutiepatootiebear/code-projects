import React from 'react'
import {connect} from 'react-redux'
import { milliSec } from '../redux'

let intervalID

const Controller = props => {
    const setTimeFunc = () => {
        intervalID = setInterval( props.milliSec, 10)
    }

    // stop function
    const stop = props => {
        console.log('this stop function gets hit')
        clearInterval(intervalID)
            if(intervalID) {
                intervalID = false
            }

    }

    // reset func
    const reset = props => {
        console.log('reset gets hit')
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        }
       
    }


    return(
        <div>
            <button className="startButton" onClick={setTimeFunc}>Start</button>
            <button onClick={stop}>Stop </button>
            <button onClick={reset}>reset </button>
        </div>
    )
}

export default connect(null, {milliSec})(Controller)
