import React, { Component } from 'react';
import BottomNav from '../components/Molecules/appBar/BottomNav.jsx';

export default class ProjectPage extends Component {
  state = {
    Boards: [],
    Tasks: [],
    Entries: [],
    Resources: [],
  };
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <BottomNav />
      </>
    );
  }
}
