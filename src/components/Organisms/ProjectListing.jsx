import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCardContainer from '../../store/containers/ProjectContainer';
import { Link } from '@reach/router';

export default function ProjectListing(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Projects</h1>
      </Grid>
      {props.projects.map((projectId) => (
        <Grid key={projectId} item xs={6}>
          <Link to={`/projects/${projectId}`}>
            <ImageCardContainer projectId={projectId} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
