import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, Redirect } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";

import ImageCardContainer from "Molecules/HomeCards/BasicCard.jsx";
import { GET_ALL_PROJECTS } from "GQL/queries";

export default function ProjectListing(props) {
  // async componentDidMount() {
  //   await this.props.fetchProjects();
  // }
  // props.fetchProjects();

  const projects = useQuery(GET_ALL_PROJECTS);

  return projects.error ? (
    projects.error.message.includes("Unauthorized") ? (
      <Redirect to="/login" noThrow />
    ) : (
      <h1>Sorry we couldnt display</h1>
    )
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Projects</h1>
      </Grid>

      {projects.loading === false ? (
        projects.data.getAllProjects.map((project) => (
          <Grid key={project.id} item xs={6}>
            <Link to={`/projects/${project.id}`}>
              <ImageCardContainer project={project} />
            </Link>
          </Grid>
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}
