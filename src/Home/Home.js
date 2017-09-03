import React, { Component } from 'react';
import './Home.css';

import vac from '../images/vac.gif';
import trinet from '../images/trinet-thumb.gif';
import designmap from '../images/designmap-thumb.gif';
import creatimator from '../images/creatimator.gif';
import swiper from '../images/swiper.gif';
import bankrate from '../images/bankrate-thumb.gif';
import justin from '../images/justin-thumb.gif';

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="nav-wrapper container">
            <div className="logo">
              <a href="">
                <h2>Justin Hardin</h2>
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
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>140 Proof</h3>
                    </div>
                    <img src={vac} alt=""/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Butchershop</h3>
                    </div>
                    <img src={creatimator} alt=""/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Designmap</h3>
                    </div>
                    <img src={designmap} alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Bankrate</h3>
                    </div>
                    <img src={bankrate} alt=""/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>TriNet</h3>
                    </div>
                    <img src={trinet} alt=""/>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Justinhardin.me</h3>
                    </div>
                    <img src={justin} alt=""/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb">
                <a href="">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Swiper</h3>
                    </div>
                    <img src={swiper} alt=""/>
                  </div>
                </a>
              </div>
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
