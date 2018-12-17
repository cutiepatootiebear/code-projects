import React from 'react'

const Box = (props) => {
    const styles = {
        backgroundColor: 'blue',
        border: '1px solid black',
        height: '400px',
        width: '400px',
        display: 'inline-block'
    }

    return (
     <div style={styles}>
     <h1>{props.title}</h1>
     <h3>{props.subtitle}</h3>
     <p>{props.info}</p>
     </div>
 )
}

export default Box;