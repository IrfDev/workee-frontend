import React from 'react';
import Grid from '@material-ui/core/Grid';
import RepoItem from '../Molecules/RepoItem.jsx';

export default function ReposListing(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Repos</h1>
      </Grid>
      {props.repos.map((repo) => (
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
