import { createStore } from 'redux'


// init state
const initState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
}

// action
export const milliSec = () => {
    return {
        type: "MILLI_SEC"
    }
}

// reducer
const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "MILLI_SEC":
         if (prevState.minutes >= 60) {
            // console.log(' min get hits')
            return {
                hours: prevState.hours + 1,
                minutes: 0,
                milliseconds: 0,
                seconds: 0
            }
        }

        else if (prevState.seconds >= 60) { 
            // console.log(' sec get hits')
            return {
                minutes: prevState.minutes + 1,
                seconds: prevState.seconds = 0,
                milliseconds: prevState.milliseconds = 0,
                hours:prevState.hours
            } 
        }
        else if (prevState.milliseconds >= 100) {
            // console.log(' what teh fuck ')
            return { 
                seconds: prevState.seconds + 1,
                milliseconds: 0,
                minutes: prevState.minutes,
                hours: prevState.hours
            } 
        } else {
            // console.log(' mili get hits')
            return {
                seconds: prevState.seconds,
                milliseconds: prevState.milliseconds + 1,
                minutes: prevState.minutes,
                hours: prevState.hours
            }
        }
        default: return( 
            prevState
        )
    }    
}

export default createStore(reducer)

