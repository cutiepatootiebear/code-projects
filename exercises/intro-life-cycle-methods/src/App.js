import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super() 
            this.state = {
                backgroundColor: "red"
            }
    }

    componentDidMount() {
        window.addEventListener("keydown", e => {
            if(e.code === "keyB") {
                // console.log('key b was pressed', "keyB")
                this.setState({
                    backgroundColor: 'blue'
                })
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', null)
    }

    render() {
        const styles = {
            container: {
                backgroundColor: this.state.backgroundColor,
                textAlign: 'center'
            },
            title: {
                fontSize: 30,
                fontWeight: 'lighter'
            }
        }
        return (
            <div style={styles.container}>
                <h1 style={styles.tite}> hey wurld</h1>
            </div>
        )
    }
}

export default App;