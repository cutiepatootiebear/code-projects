import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '../redux'
import { subOne } from '../redux'
import { multiplyTwo } from '../redux'

const Controls = props => {
    return (
        <div>
            <button onClick={ props.addOne }>Add One</button>
            <button onClick={ props.subOne }>Minus One</button>
            <button onClick={ props.multiplyTwo }>Multiply Two</button>
        </div>
    )
}

export default connect(null, { addOne, subOne, multiplyTwo} )(Controls)