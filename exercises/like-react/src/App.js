import React, { Component } from 'react';
import Follow from './Follow';

class App extends Component {
    constructor() {
        super()

        this.state = {
            status: true
        }
    }

handleClick = e => {
    this.setState(prevState => {
        return {
            status: !prevState.status
        }
    })
}

    render() {
        return (
            <div>
                <Follow status={this.state.status} handleClick={this.handleClick} />
            </div>
        )
    }

}

export default App;