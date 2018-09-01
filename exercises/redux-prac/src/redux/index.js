// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
    count: 0
}


// Action 
export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}
 
// second action
export const subOne = () => {
    return {
        type: "SUB_ONE"
    }
}

// third action
export const multiplyTwo = () => {
    return {
        type: "MULTIPLY_TWO"
    }
}



// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUB_ONE":
            return {
                count: prevState.count - 1
            }
        case "MULTIPLY_TWO":
            return {
                count: prevState.count * 2
            }
        default:
            return prevState
    }
}


export default createStore(reducer)