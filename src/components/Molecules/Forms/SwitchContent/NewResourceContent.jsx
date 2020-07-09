import React from "react";
// Local Forms imports
import WeeklyNewResource from "../Forms/resources/WeeklyNewResource.jsx";
import DailyNewResource from "../Forms/resources/DailyNewResource.jsx";
import SourceNewResource from "../Forms/resources/SourceNewResource.jsx";
import ToolsNewResource from "../Forms/resources/ToolsNewResource.jsx";

export default function renderSwitch({ props, handleFormsChanges }) {
  switch (props.activeTab) {
    case "Weekly":
      return (
        <WeeklyNewResource
          activeProject={props.activeProject}
          handleForm={handleFormsChanges}
        />
      );
    case "Daily":
      return (
        <DailyNewResource
          activeProject={props.activeProject}
          handleForm={handleFormsChanges}
        />
      );
    case "Tools":
      return (
        <ToolsNewResource
          activeProject={props.activeProject}
          handleForm={handleFormsChanges}
        />
      );
    case "Source":
      return (
        <SourceNewResource
          activeProject={props.activeProject}
          handleForm={handleFormsChanges}
        />
      );
    default:
      "S";
      break;
  }
}
