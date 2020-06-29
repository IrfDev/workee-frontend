import React from "react";
import Container from "@material-ui/core/Container";
import ListReadItem from "../components/Organisms/ReadsListing.jsx";
import ProjectListingContainer from "../store/containers/projects/ProjectsContainer";
import ReposListing from "../components/Organisms/ReposListing.jsx";
// import axios from 'axio3s';

// import  { fetchProjects } from '../store/actions/Projects'

export default class Home extends React.Component {
  state = {
    repos: [],
    reads: [],
  };
  render() {
    return (
      <React.Fragment>
        <Container maxWidth="sm">
          <ProjectListingContainer />
          <ListReadItem reads={this.state.reads} />
          <ReposListing repos={this.state.repos} />
        </Container>
      </React.Fragment>
    );
  }
}
