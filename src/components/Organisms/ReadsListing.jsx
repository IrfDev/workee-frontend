import React from 'react';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ReadItem from '../Molecules/ReadItem.jsx';
import axios from 'axios';

export default class ReadsListing extends React.Component {
  state = {
    reads: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8080/reads').then((response) => {
      this.setState({ reads: response.data });
    });
  }

  render() {
    return (
      <Grid container>
        <List>
          <h1>Reads</h1>
          {this.state.reads.map((read) => (
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
}
