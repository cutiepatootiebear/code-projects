import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios'

export default class Home extends Component {
  active (path) {
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  render () {
    axios.get('http://localhost:8080/games').then((x) => {
      console.log(x)
    })
    return (
      <div className="main">
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="masthead clearfix">
                <div className="inner">
                  <nav>
                    <img className="header-logo" src="https://cdn.filestackcontent.com/haOEMG05TluD4u8SEIcm"/>
                    <ul className="nav masthead-nav">
                      <li className={this.active('/')}><Link to="/">Home</Link></li>
                      <li className={this.active('/about')}><Link to="/about">About</Link></li>
                      <li className={this.active('/contact')}><Link to="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
