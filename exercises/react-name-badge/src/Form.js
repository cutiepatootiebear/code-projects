import React, { Component } from 'react'

class Form extends Component{
    constructor() {
        super()

        this.state = { 
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favFood: '',
            bio: '',
            badgesArr: []
        }
    }


// this.setState handles the status of state
change = e => {
    console.log('this is event=> ', e)
    this.setState({[e.target.name]: e.target.value})
}


   // setState changes state object, within the method () pass in the new state alt way
  // call the prevState, that allows access a copy of the previous state by callback()
handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
        return {
             // the value we want to return should be in an object 
             badgesArr: [...prevState.badgesArr, this.state ]
        }
    })
    console.log('this is this.state=> ', this.state)
}

render() { 
    const displayValue = this.state.badgesArr.map((test, i) => {
        const objDisplay = JSON.stringify(test)
        console.log(objDisplay)
        return <p key={test + i}> {objDisplay} </p>
    })
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.change} />
                <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.change} />
                <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.change} />
                <input type='text' name='placeOfBirth' placeholder='Where were you born?' value={this.state.placeOfBirth} onChange={this.change} />
                <input type='text' name='phone' placeholder='Phone Number' value={this.state.phone}onChange={this.change} />
                <input type='text' name='favFood' placeholder='What is your fav food?' value={this.state.favFood} onChange={this.change} />
                <input type='text' name='bio' placeholder='Tell us about yourself' value={this.state.bio} onChange={this.change} />
                <button>Submit</button>
                {displayValue}
            </form>
        )
    }
}

export default Form