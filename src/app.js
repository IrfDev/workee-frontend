import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import TopNav from './components/Molecules/appBar/TopNav.jsx';
import Home from './views/Home.jsx';
import Projects from './views/ProjectPage.jsx';

class App extends Component {
  render() {
    return (
      <div className='App' fontFamily='fontFamily'>
        <TopNav />
        <Router>
          <Home path='/' />
          <Projects path='/projects/:title' />
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);
