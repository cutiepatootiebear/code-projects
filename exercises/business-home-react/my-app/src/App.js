import React from 'react'
import Header from './Header'
import "./index.css"
import Wrapper from './Wrapper'


// ASK instructor why this wont work
// const App = () => {
//     return (
//         <div>
//             <Header />
//         </div>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <div>
            <div id="header">
                <Header />
                <Wrapper />
            </div>
            </div>

            
        )
    }
}

export default App