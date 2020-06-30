import React, { Component } from "react";
import BottomNav from "../store/containers/nav/BottomNavProjects";
import Daily from "../components/Organisms/Projects/Daily.jsx";
import Resource from "../components/Organisms/Projects/Resource.jsx";
import Source from "../components/Organisms/Projects/Source.jsx";
import Weekly from "../components/Organisms/Projects/Weekly.jsx";

export default class ProjectPage extends Component {
  state = {
    Boards: [],
    Tasks: [],
    Entries: [],
    Resources: [],
  };
  renderSwitch(param) {
    switch (param) {
      case "Weekly":
        return Weekly();
      case "Daily":
        return Daily();
      case "Tools":
        return Resource();
      case "Source":
        return Source();
      default:
        Weekly();
        break;
    }
  }
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <div>{this.renderSwitch(this.props.nav.activeNav)}</div>
        <BottomNav />
      </>
    );
  }
}
