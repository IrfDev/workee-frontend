import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";

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
  if (projects.data) console.log(projects.data.getAllProjects);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Projects</h1>
      </Grid>

      {projects.loading === false ? (
        projects.data.getAllProjects.map((project) => (
          <Grid key={project.id} item xs={6}>
            <Link
              to={`/projects/${project.id}`}
              onClick={() => {
                props.setActiveProject(project);
              }}
            >
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
