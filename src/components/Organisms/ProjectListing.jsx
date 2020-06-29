import React from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import ImageCardContainer from "../../store/containers/ProjectContainer";
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
          this.props.ids.map((projectId) => (
            <Grid key={projectId} item xs={6}>
              <Link to={`/projects/${projectId}`}>
                <ImageCardContainer projectId={projectId} />
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
