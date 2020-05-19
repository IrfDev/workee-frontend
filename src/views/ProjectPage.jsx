import React, { Component } from 'react';
import ProjectListing from '../components/Organisms/ProjectListing.jsx';
import axios from 'axios';

export default class ProjectPage extends Component {
  state = {
    projects: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/projects').then((response) => {
      this.setState({ projects: response.data });
    });
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <ProjectListing projects={this.state.projects} />
      </>
    );
  }
}
