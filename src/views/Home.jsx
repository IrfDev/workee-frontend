import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import ListReadItem from '../components/Organisms/ReadsListing.jsx';
import ProjectListing from '../components/Organisms/ProjectListing.jsx';
import ReposListing from '../components/Organisms/ReposListing.jsx';
import axios from 'axios';

export default class Home extends Component {
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
      <React.Fragment>
        <Container maxWidth='sm'>
          <ProjectListing projects={this.state.projects} />
          <ListReadItem />
          <ReposListing />
        </Container>
      </React.Fragment>
    );
  }
}
