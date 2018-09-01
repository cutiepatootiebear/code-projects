import React from 'react'

const Form = props => {
    console.log(props)
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type= "text" 
                name="ssn" 
                alue={props.snn}
                placeholder="ssn"
                onChange={props.handleChange} />
            <input 
                type= "text" 
                name="favBand" 
                value={props.favBand}
                placeholder="fav band"
                onChange={props.handleChange} />
            <input 
                type= "text" 
                name="firstCar" 
                value={props.firstCar}
                placeholder="first car"
                onChange={props.handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default Form