import React, { Component } from 'react';
import './Home.css';

import vac from '../images/vac.gif';
import trinet from '../images/trinet-thumb.gif';

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
          <h1>San Fransisco Front end Developer &#10; looking for new opportunities</h1>
          <div className="btn-wrapper">
            <button className="btn">About me</button>
          </div>
        </div>
        <div className="projects container">
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <img src={vac} alt=""/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb"></div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb"></div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb">
                <img src={trinet} alt=""/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb"></div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb"></div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="footer-inner"></div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Home;
