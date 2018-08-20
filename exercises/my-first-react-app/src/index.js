import React from 'react'
import ReactDom from 'react-dom' 
import App from './App'

//teach react what to render to the page. two args
 //1. what to render and 2. where to render
// ReactDOM.render(arg1, document.getElementById('root'))
ReactDom.render(<App/>, document.getElementById('root'))
// ReactDom.render(<HelloWorld/>, document.getElementById('root'))