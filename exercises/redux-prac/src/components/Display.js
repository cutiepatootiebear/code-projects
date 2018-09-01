import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    )
}
            // 1: What do you want from your store
            // 2: What methods do I need
export default connect(state=>state, {})(Display)
