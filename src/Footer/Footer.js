import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-block">
              <div className="block-title">
                <h4>Connect</h4>
              </div>
              <div className="block-links">
                <div className="block-col">
                  <p><a href="">jhardin295@gmail.com</a></p>
                  <p><a href="">925-864-6437</a></p>
                </div>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <h4>Social</h4>
              </div>
              <div className="block-links">
                <div className="block-col">
                  <p><a href="">github</a></p>
                  <p><a href="">linkedin</a></p>
                </div>
                <div className="block-col">
                  <p><a href="">twitter</a></p>
                  <p><a href="">instagram</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
