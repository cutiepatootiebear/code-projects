import React, { Component } from 'react'
import Form from './Form'
import InfoCard from './InforCard';

class App extends Component{
    constructor() {
        super()
        this.state = {
            ssn: '',
            favBand: '',
            firstCar: '',
            data: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();
        const newCard = {
            ssn: this.state.ssn,
            favBand: this.state.favBand,
            firstCar: this.state.firstCar,
        }
        // console.log(newCard)
        this.setState(prevState => ({
            data: [...prevState.data, newCard],
            ssn: '',
            favBand: '',
            firstCar: '',
        }))
    }

    render() {
        return(
            <div>
                <Form 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    snn={this.state.snn}
                    favBand={this.state.favBand}
                    firstCar={this.state.firstCar}
                />
                <div>
                    { this.state.data.map(info => <InfoCard {...info} /> )} 
                </div>
            </div>
        )
    }
}

export default App 