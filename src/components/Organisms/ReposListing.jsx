import React from "react";
import Grid from "@material-ui/core/Grid";
import RepoItem from "../Molecules/RepoItem.jsx";

export default class ReposListing extends React.Component {
  async componentDidMount() {
    await this.props.fetchRepos();
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Repos</h1>
        </Grid>
        {this.props.repos.map((repo) => (
          <Grid key={repo.key} item xs={12}>
            <RepoItem
              Title={repo.Title}
              description={repo.description}
              technologies={repo.tecnologies}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
