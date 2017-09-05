import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="nav-wrapper container">
          <div className="logo">
            <Link to="/">
              <h2>Justin Hardin</h2>
            </Link>
          </div>
          <div
            className={`hamburger ${this.props.menuOpen ? 'isOpen': ''}`}
            onClick={() => this.props.menuToggle()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
