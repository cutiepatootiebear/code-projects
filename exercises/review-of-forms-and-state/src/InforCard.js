import React from 'react'


const InfoCard = props => {
    return(
        <div style={{border: '1px solid black'}}>
            <h3>SSN: {props.ssn}</h3>
            <h3>Favortite band: {props.favBand}</h3>
            <h3>First Car: {props.firstCar}</h3>
        </div>
    )
}

export default InfoCard