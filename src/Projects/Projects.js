import React, { Component } from 'react';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './Projects.css';

import Proof from './Proof/Proof.js';
import ButcherShop from './ButcherShop/ButcherShop.js';

class Project extends Component {
  render() {
    const route = this.props.match.params.project;
    const projects = {
      '140proof': <Proof />,
      'butchershop': <ButcherShop />,
    }
    const selectedProject = projects[route];
    return (
      <div>
        <Header />
        <div>
          <h1>Project</h1>
          {selectedProject}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Project;
