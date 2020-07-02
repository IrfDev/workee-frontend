import React from "react";
import Container from "@material-ui/core/Container";
import ListReadItem from "../store/containers/reads/ReadsListingContainer";
import ProjectListingContainer from "../store/containers/projects/ProjectsContainer";
import ReposListing from "../store/containers/repos/ReposListingContainer";
import FixedCta from "../components/Atoms/FixedHomeCta.jsx";
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
        <FixedCta />
        <Container maxWidth="sm">
          <ProjectListingContainer />
          <ListReadItem reads={this.state.reads} />
          <ReposListing repos={this.state.repos} />
        </Container>
      </React.Fragment>
    );
  }
}
