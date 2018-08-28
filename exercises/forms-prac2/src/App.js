import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super()

        this.state = {
            myName: '',
            age: '',
            city: '',
            state: ''
        }
    }

    changeHandle = event => {
        //what is this doing?
        // console.log('this is this.state',this.state)
        console.log('this is thi', this)
        // console.log('this is event.target.name=>', event.target.name)
        // console.log('this is event', event)
        // console.log('this is target', event.target)
        // console.log('this is value', value)
        this.setState({ [event.target.name]: event.target.value })
     
    }

    submitHandle = event => {
        event.preventDefault()
        alert(`Name:${this.state.myName}\nAge:${this.state.age}\nCity:${this.state.city}\nState:${this.state.state}`)
    }

    render() {
        return (
            <form onSubmit={this.submitHandle}>
                {/* name has to be the same as state */}
                <input type='text' name='myName' placeholder="fullName" value={this.state.myName} onChange={this.changeHandle} />
                <input type='text' name='age' placeholder='what is your age' value={this.state.age} onChange={this.changeHandle} />
                <input type='text' name='city' placeholder='what city?' value={this.state.city} onChange={this.changeHandle} />
                <input type='text' name='state' placeholder="what state?" value={this.state.state} onChange={this.changeHandle} />
                <button>submit</button>
            </form>
        )
    }

}

export default App;