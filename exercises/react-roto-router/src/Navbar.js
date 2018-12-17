import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (props) {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/services">services</Link>
        </div>
    )
}

export default Navbar;