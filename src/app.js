import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ImageCard from './components/Molecules/ImageCard';
import BasicCard from './components/Molecules/BasicCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BasicCard />
        <ImageCard />
      </div>
    );
  }
}

export default hot(module)(App);
