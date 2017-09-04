import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import Home from './Home/Home.js';
import About from './About/About.js';
import Project from './Projects/Projects.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project/:project" component={Project}/>
        </div>
      </Router>
    );
  }
}

export default App;
