import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ReadItem from '../Molecules/ReadItem.jsx';

export default function ReadsListing(props) {
  return (
    <Grid container>
      <List>
        <h1>Reads</h1>
        {props.reads.map((read) => (
          <Grid item key={read.key} xs={12}>
            <ReadItem
              img={read.thumbnail}
              title={read.title}
              description={read.about}
            />
          </Grid>
        ))}
      </List>
    </Grid>
  );
}
