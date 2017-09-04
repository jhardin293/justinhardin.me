import React, { Component } from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>About</h1>
        </div>
        <Footer />
      </div>

    )
  }
}

export default About;
