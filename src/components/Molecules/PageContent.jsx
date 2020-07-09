import React from "react";

import Daily from "Organisms/Projects/Daily.jsx";
import Resource from "Organisms/Projects/Resource.jsx";
import Source from "Organisms/Projects/Source.jsx";
import Weekly from "Organisms/Projects/Weekly.jsx";

const renderSwitch = ({ param, project }) => {
  switch (param) {
    case "Weekly":
      return <Weekly boards={project.weekly.boards} />;

    case "Daily":
      console.log(project);
      return project.daily ? (
        <Daily tasks={project.daily.tasks} />
      ) : (
        <h1>Create some tasks</h1>
      );

    case "Tools":
      return (
        <Resource
          repos={project.resources.repos}
          notebooks={project.resources.notebooks}
          resources={project.resources.resources}
        />
      );

    case "Source":
      return project.sources ? (
        <Source
          streams={project.sources.streams}
          heros={project.sources.heroes}
        />
      ) : (
        <h1>Create some sources</h1>
      );

    default:
      <Weekly boards={project.weekly.boards} />;
      break;
  }
};

export default renderSwitch;
