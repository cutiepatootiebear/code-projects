import React from 'react'

const Superhero = (props) => {
    console.log(props);
    return (
        <div onClick={props.sayPhrase}>
            <h1>{props.blah}</h1>
            <img src={props.apples} alt='yo'/>
        </div>
    )
}

export default Superhero