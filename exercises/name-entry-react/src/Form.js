import React, {Component} from 'react';
   //function to handle submit 
    // map through names array ]
    // display in ol
class Form extends Component {
    constructor() {
        super()

        this.state = {
            myName: '',
            names: []
        }
    }

// this.setState handles the status of state
    change = event => {
        console.log("this is event", event)
        this.setState({[event.target.name]: event.target.value })
    };

    // setState changes state object, within the method () pass in the new state 
    // alt way
    // call the prevState, that allows access a copy of the previous state by callback()

    handleSubmit = event => {
        event.preventDefault();
        // set state always requires a return 
        this.setState(prevState => {
            // this.state.names.push(this.state.myName);
            // a better way to push
            // const pushingOneItem = [...prevState.names, prevState.myName] // put myName into names arry
            // console.log('this is this.state.myName', this.state.myName)
            // console.log('pushingOneItem=>', pushingOneItem)
            // set state always requires a return 
            return {
                // the value we want to return should be in an object 
                names: [...prevState.names, prevState.myName]
            }
        })
        console.log('this is this.state==>', this.state)
    }


    render() {
        const displayValue = this.state.names.map((apple, i) => {
            return <li key={apple + i}> {apple} </li>
        })
        return (
            <form onSubmit={this.handleSubmit}>
            {displayValue}
                <input type="text" name='myName' placeholder='my name' value={this.state.myName} onChange={this.change} />
                <button>...Click me...</button>
                
            </form>
        )
    }
}

export default Form;