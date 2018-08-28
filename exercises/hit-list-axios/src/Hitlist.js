import React from 'react'


const Hitlist = (props) => {
    return(
        <div >
            <img className="images" src={props.image} alt='criminal'/>
            <div className="textStyle">
                <p>{props.name} </p>
            </div>
        </div>
    )
}


export default Hitlist