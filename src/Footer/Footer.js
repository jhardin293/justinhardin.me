import React, { Component } from 'react';
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
                  <p><a href="mailto:jhardin295@gmail.com">jhardin295@gmail.com</a></p>
                  <p><a href="tel:9258646437">925-864-6437</a></p>
                </div>
              </div>
            </div>
            <div className="footer-block">
              <div className="block-title">
                <h4>Social</h4>
              </div>
              <div className="block-links">
                <div className="block-col">
                  <p><a href="https://github.com/jhardin293">github</a></p>
                  <p><a href="https://www.linkedin.com/in/justin-hardin-7ba86232">linkedin</a></p>
                </div>
                <div className="block-col">
                  <p><a href="https://twitter.com/jhardin925">twitter</a></p>
                  <p><a href="https://www.instagram.com/justin.svg/">instagram</a></p>
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
