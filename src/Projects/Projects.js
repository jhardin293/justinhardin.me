import React, { Component } from 'react';

import './Projects.css';

import Proof from './Proof.js';
import ButcherShop from './ButcherShop.js';
import Designmap from './Designmap.js';
import Bankrate from './Bankrate.js';
import TriNet from './TriNet.js';
import Justin from './Justin.js';
import Swiper from './Swiper.js';

class Project extends Component {
  render() {
    const route = this.props.match.params.project;
    const projects = {
      '140proof': <Proof />,
      'butchershop': <ButcherShop />,
      'designmap': <Designmap />,
      'bankrate': <Bankrate />,
      'trinet': <TriNet />,
      'justinhardin.me': <Justin />,
      'swiper': <Swiper />,
    }
    const selectedProject = projects[route];
    return (
      <div>
        <div>
          <h1>Project</h1>
          {selectedProject}
        </div>
      </div>
    )
  }
}

export default Project;
