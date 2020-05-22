import React from 'react';
import Container from '@material-ui/core/Container';
import ListReadItem from '../components/Organisms/ReadsListing.jsx';
import ProjectListingContainer from '../store/containers/ProjectsContainer';
import ReposListing from '../components/Organisms/ReposListing.jsx';
import axios from 'axios';

export default class Home extends React.Component {
  state = {
    projects: [],
    repos: [],
    reads: [],
  };
  async componentDidMount() {
    await axios.get('http://localhost:8080/projects').then((response) => {
      this.setState({ projects: response.data });
    });
    axios.get('http://localhost:8080/repos').then((response) => {
      this.setState({ repos: response.data });
    });
    await axios.get('http://localhost:8080/reads').then((response) => {
      this.setState({ reads: response.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Container maxWidth='sm'>
          <ProjectListingContainer projects={this.props.projects} />
          <ListReadItem reads={this.state.reads} />
          <ReposListing repos={this.state.repos} />
        </Container>
      </React.Fragment>
    );
  }
}
