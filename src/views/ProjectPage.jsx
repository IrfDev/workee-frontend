import React, { Component } from "react";
import BottomNav from "../store/containers/nav/BottomNavProjects";

export default class ProjectPage extends Component {
  state = {
    Boards: [],
    Tasks: [],
    Entries: [],
    Resources: [],
  };
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <h2>{this.props.nav.activeNav}</h2>
        <BottomNav />
      </>
    );
  }
}
