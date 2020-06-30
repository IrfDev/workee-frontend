import React from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ReadItem from "../Molecules/ReadItem.jsx";

export default class ReadsListing extends React.Component {
  async componentDidMount() {
    await this.props.fetchReads();
  }
  render() {
    return (
      <Grid container>
        <List>
          <h1>Reads</h1>
          {this.props.reads.map((read) => (
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
