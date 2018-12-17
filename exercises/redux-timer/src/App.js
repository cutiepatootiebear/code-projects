import React from 'react'
import Controls from './components/Controller'
import Display from './components/Display'
import './style.css'

const App = () => {
    return(
        <div>
            <Display />
            <Controls />
        </div>
    )
}

export default App