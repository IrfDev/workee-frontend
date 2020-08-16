import React, { Component } from "react";

export default class NameInputProject extends Component {
  render() {
    <div>
      <h4>Basic</h4>
      <TextField id="outlined-basic" label="Nombre" variant="outlined" />
      <TextField
        id="standard-multiline-static"
        label="Descripción"
        multiline
        variant="outlined"
        rows={4}
      />
    </div>;
  }
}
