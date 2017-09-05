import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

import Header from '../Header/Header.js';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu() {
    const currentState = this.state.menuOpen;
    this.setState({menuOpen: !currentState});
    if (!currentState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  render() {
    return (
      <nav className={this.state.menuOpen ? 'isOpen': ''}>
        <Header menuToggle={this.toggleMenu.bind(this)} menuOpen={this.state.menuOpen} />
        <div className="nav-background">
          <ul>
            <li>
              <Link onClick={this.toggleMenu.bind(this)} to="/">work</Link>
            </li>
            <li>
              <Link onClick={this.toggleMenu.bind(this)} to="/about">about</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav;
