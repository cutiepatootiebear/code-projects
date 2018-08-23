import React from 'react';
import Pet from './Pet';

const Friendz = (props) => {
    console.log("this is props=>", props)
   const displayPets= props.pets.map((pet, i) => {
        return <Pet key={pet.name + i}
                name = {pet.name}
                breed = {pet.breed}
        />
    })
    return (
          <div>
            <h1>This is the name of friend: {props.name}</h1>
            <h3>this is the friends age: {props.age}</h3>
            {displayPets}
        </div>
    )
}

export default Friendz;
