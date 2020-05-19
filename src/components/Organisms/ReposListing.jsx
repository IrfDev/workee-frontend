import React from 'react';
import Grid from '@material-ui/core/Grid';
import RepoItem from '../Molecules/RepoItem.jsx';
import axios from 'axios';

export default class ReposListing extends React.Component {
  state = {
    repos: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/repos').then((response) => {
      this.setState({ repos: response.data });
    });
  }
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Repos</h1>
        </Grid>
        {this.state.repos.map((repo) => (
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
