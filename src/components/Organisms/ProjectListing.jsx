import React from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import ImageCardContainer from "../../components/Molecules/BasicCard.jsx";
import { Link } from "@reach/router";

export default class ProjectListing extends React.Component {
  async componentDidMount() {
    await this.props.fetchProjects();
    console.log("Props", this.props);
  }
  render() {
    console.log("Render:", this.props);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Projects</h1>
        </Grid>

        {this.props.isLoading === false ? (
          this.props.projects.map((project) => (
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
}
