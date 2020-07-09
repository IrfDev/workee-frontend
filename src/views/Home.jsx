import React from "react";
import Container from "@material-ui/core/Container";
import ListReadItem from "Containers/reads/ReadsListingContainer";
import ProjectListingContainer from "Containers/projects/ProjectsContainer";
import ReposListing from "Containers/repos/ReposListingContainer";
import FixedCta from "Atoms/utils/FixedHomeCta.jsx";

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
