import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
    const displayPets = props.pets.map((pet, i) => {
        return <Pet key={pet.name + i}
                        name={pet.name}
                        breed={pet.breed}
                         />
    })
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            {displayPets}
        </div>
    )
}

export default Friend;