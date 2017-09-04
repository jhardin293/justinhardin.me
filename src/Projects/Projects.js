import React, { Component } from 'react';
import Header from '../Header/Header.js';
import './Projects.css';

class Project extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Header />
        <div>
          <h1>Project</h1>
        </div>
      </div>
    )
  }
}

export default Project;
