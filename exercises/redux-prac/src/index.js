import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux'


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
document.getElementById('root'))




// if mili < 100
// add 1 seconds 
// mili = 0

// if seconds < 60
// add 1 minutes
// seconds =0

// if minutes < 60
// add 1 hours
// minute = 0