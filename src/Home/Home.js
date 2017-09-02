import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="nav-wrapper container">
            <div className="logo">
              <a href="">
                <h2>Justin</h2>
                <h2>Hardin</h2>
              </a>
            </div>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
        <div className="title container">
          <h1>San Fransisco Front end Developer looking for new opportunities</h1>
        </div>
      </div>
    )
  }
}

export default Home;
