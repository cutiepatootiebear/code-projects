import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header-container">
           
            <Navbar />  
            <div className="hero-text">
                <h1>Clean Blog</h1>
                <h3> A Blog Theme by Start Bootstrap </h3>
            </div>
        </div>
    )
}

export default Header