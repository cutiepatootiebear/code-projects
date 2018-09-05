const redux = require('redux')
// const uuidv1 = require ('uuid/v1')


const initState= {
    contact: [{
        name: 'jameel',
        phone: "909123",
        email: "jameel@gmail.com",
        id: 1
    }]
}

// Actions
const addOnePerson = addNewPerson => {
    return {
        type: "ADD_ONE_PERSON",
        addNewPerson // adding a new properthy to the obj
    }
}

const deleteOnePerson = deleteOnePerson => {
    return {
        type: "DELETE_ONE_PERSON",
        deleteOnePerson
    }
}

// reducer
function reducer (prevState = initState, action) {
    switch(action.type) {
        case "ADD_ONE_PERSON":
            return {
                contact: [...prevState.contact, action.addNewPerson ], 
            
            }
        case "DELETE_ONE_PERSON":
            return {
                contact: prevState.contact.filter(person => person.id !== action.deleteOnePerson)
            }
        default:
         return prevState;
    }

}


const newPerson1 = {
    name: 'nate',
    phone: '90909',
    email: 'test@gmail.com',
    id: 2
}

const newPerson2 = {
    name: 'nate2',
    phone: '90909',
    email: 'test@gmail.com2',
    id: 3
}

const thisOneWillBeDeleted = {
    name: 'deleteMe',
    phone: '90909',
    email: 'test@gmail.com2',
    id: 4
}


const store = redux.createStore(reducer)
store.subscribe(()=> {
    console.log(store.getState())
})


store.dispatch(addOnePerson(newPerson1))
store.dispatch(addOnePerson(newPerson2))
store.dispatch(addOnePerson(thisOneWillBeDeleted))
store.dispatch(deleteOnePerson(4))