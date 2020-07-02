import React, { Component } from "react";
import BottomNav from "../store/containers/nav/BottomNavProjects";
import Daily from "../components/Organisms/Projects/Daily.jsx";
import Resource from "../components/Organisms/Projects/Resource.jsx";
import Source from "../components/Organisms/Projects/Source.jsx";
import Weekly from "../components/Organisms/Projects/Weekly.jsx";
import Container from "@material-ui/core/Container";

import { CircularProgress } from "@material-ui/core";

export default class ProjectPage extends Component {
  state = {
    Boards: [],
    Tasks: [],
    Entries: [],
    Resources: [],
  };
  renderSwitch(param, project) {
    switch (param) {
      case "Weekly":
        return <Weekly boards={project.weekly.boards} />;
      case "Daily":
        return <Daily tasks={project.daily.tasks} />;
      case "Tools":
        return (
          <Resource
            repos={project.resources.repos}
            notebooks={project.resources.noteBooks}
            resources={project.resources.resources}
          />
        );
      case "Source":
        return (
          <Source
            streams={project.sources.stream}
            heros={project.sources.heroes}
          />
        );
      default:
        <Weekly boards={project.weekly.boards} />;
        break;
    }
  }

   async componentDidMount() {
    if (!this.state.activeProject) {
      await this.props.fetchAndFindProjects(this.props.title);
    }
  }
  render() {
    return(
      <div>
    {this.props.activeProject ?
        <div>
          <h1>{this.props.title}</h1>
          <Container>
            {this.renderSwitch(
              this.props.nav.activeNav,
              this.props.activeProject
            )}
          </Container>
          <BottomNav activeProject={this.props.activeProject.id} />
        </div>
    :
       <CircularProgress />
    }
    </div>
    )
  }
}