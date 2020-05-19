import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from '../Molecules/BasicCard.jsx';
import { Link } from '@reach/router';

export default function ProjectListing(props) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Projects</h1>
      </Grid>
      {props.projects.map((project) => (
        <Grid key={project.key} item xs={6}>
          <Link to={`/projects/${project.title}`}>
            <ImageCard
              title={project.title}
              description={project.description}
              img={project.thumb}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
