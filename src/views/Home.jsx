import React from "react";
import Container from "@material-ui/core/Container";
import ListReadItem from "Organisms/HomeListing/ReadsListing.jsx";
import ProjectListingContainer from "Organisms/HomeListing/ProjectListing.jsx";
import ReposListing from "Organisms/HomeListing/ReposListing.jsx";
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
        <Container>
          <ProjectListingContainer />
          <ListReadItem reads={this.state.reads} />
          <ReposListing repos={this.state.repos} />
        </Container>
      </React.Fragment>
    );
  }
}
