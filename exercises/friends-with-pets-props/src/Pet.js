import React from 'react';

const Pet = (props) => {
  return (
    <div>
        <h5>Name:{props.name}</h5>
        <h5>Breed:{props.breed}</h5>
    </div>
  )
}

export default Pet