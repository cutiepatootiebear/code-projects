import React from 'react'

const Person = (props) => {
    console.log('this is props=>', props)
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>skin color: {props.skin_color}</h4>
            <h4>hair color: {props.hair_color}</h4>
        </div>
    )
}

export default Person;