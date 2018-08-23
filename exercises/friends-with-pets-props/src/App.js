import React from 'react';
import Friend from './Friend';

const App = () => {
    const friends = [{
        name: "Ben",
        age: 29,
        pets: [{
            name: "spot",
            breed: "tabby"
        }, {
            name: "John Johnson",
            breed: "husky"
        }, {
            name: "Bear the bear",
            breed: "Grizzly"
        }]
    }, {
        name: "Bob",
        age: 31,
        pets: [{
            name: "Sally",
            breed: "Australian Shepard"
        }]
    }, {
        name: "Marcus",
        age: 25,
        pets: [{
            name: "Indy",
            breed: "Akita"
        }, {
            name: "Anna",
            breed: "persian cat"
        }]
    }, {
        name: "Jacob",
        age: 20,
        pets: [{
            name: "fluffy",
            breed: "sphynx cat"
        }, {
            name: "patches",
            breed: "sphynx cat"
        }, {
            name: "tiger",
            breed: "sphynx cat"
        }, {
            name: "oscar",
            breed: "sphynx cat"
        }]
    }]


const displayFriends = friends.map((friendz, i) => {
    console.log('this is friendz, i', friendz, i)
    return <Friend key={friendz.name + i}
                    name={friendz.name}
                    age={friendz.age}
                    pets={friendz.pets} />
})

return (
    <div>
        {displayFriends}
    </div>
    )
}

export default App;