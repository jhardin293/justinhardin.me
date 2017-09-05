import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import Home from './Home/Home.js';
import About from './About/About.js';
import Project from './Projects/Projects.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/project/:project" component={Project}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
