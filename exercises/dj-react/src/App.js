import React, {Component} from 'react';
import './Style.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            color: white
        }
    }

    button = () => {
        this.setState({color: black})
    }



    render () {
        return ( 
            <div className="box-container">
                <div className="box1">1</div>
                <div className="box2">2</div>
                <div className="box3">3</div>
                <div className="box4">4</div>
                <button onClick={this.button}>click me </button>
            </div>
        )
    }
}


export default App

// Create four squares in a two by two grid that will change color
// You will have one button that will change all four squares either black or white.