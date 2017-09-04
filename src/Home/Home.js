import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

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
        <Header />
        <div className="title container">
          <h1>San Fransisco Front end Developer &#10; looking for new opportunities</h1>
          <div className="btn-wrapper">
              <Link to="/about">
                <button className="btn">About me</button>
              </Link>
          </div>
        </div>
        <div className="projects container">
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <Link to="/project/140proof">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>140 Proof</h3>
                    </div>
                    <img src={vac} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb">
                <Link to="/project/butchershop">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Butchershop</h3>
                    </div>
                    <img src={creatimator} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-thumb">
                <Link to="/project/designmap">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Designmap</h3>
                    </div>
                    <img src={designmap} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <Link to="/project/bankrate">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Bankrate</h3>
                    </div>
                    <img src={bankrate} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb">
                <Link to="/project/trinet">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>TriNet</h3>
                    </div>
                    <img src={trinet} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-thumb">
                <Link to="/project/justinhardin.me">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Justinhardin.me</h3>
                    </div>
                    <img src={justin} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="project-thumb">
                <Link to="/project/swiper">
                  <div className="thumb-inner">
                    <div className="thumb-hover">
                       <h3>Swiper</h3>
                    </div>
                    <img src={swiper} alt=""/>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
