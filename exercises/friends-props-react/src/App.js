import React from 'react'
import Friend from './Friend'

const App = () => {
    const friends = [{
        name: "Bob",
        age: 31,
        pets: [{
            name: "Sally",
            breed: "Australian Shepard"
    }]
}]

const displayFri = friends.map((item, i) => {
    return <Friend key={friend.name + i} 
                name={friend.name}
                age={friend.age} />
})

return (
    <div>
        {displayFri}
    </div>
)

}

export default App