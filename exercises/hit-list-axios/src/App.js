import React, {Component} from 'react'
import axios from 'axios'
import Hitlist from './Hitlist'
import './styles.css'
import Navbar from './Navbar'

class App extends Component {
    constructor(){
        super()
        this.state = {
            data:[]
        }
    }

componentDidMount() {
    axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
        // console.log(response)
        this.setState({
            data: response.data
        })
    }).catch(err => {
        console.log(err)
    })
}

    render() {
        const mappedHitlistPeople = this.state.data.map(person => <Hitlist 
                                                                        {...person}
                                                                         key={person.url} 
                                                                          />)
        
        return (
            <div >
                <Navbar />
                <div className="container">
                   {mappedHitlistPeople}
                </div>
                
            </div>
        )
    }

}

export default App 



