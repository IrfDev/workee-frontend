import React, { Suspense } from "react";
// Local Forms imports
const WeeklyNewResource = React.lazy(() =>
  import("Molecules/Forms/resources/WeeklyNewResource.jsx")
);
const DailyNewResource = React.lazy(() =>
  import("Molecules/Forms/resources/DailyNewResource.jsx")
);
const SourceNewResource = React.lazy(() =>
  import("Molecules/Forms/resources/SourceNewResource.jsx")
);
const ToolsNewResource = React.lazy(() =>
  import("Molecules/Forms/resources/ToolsNewResource.jsx")
);

export default function renderSwitch({ props, handleFormsChanges }) {
  switch (props.activeTab) {
    case "Weekly":
      return (
        <>
          <Suspense fallback={<h5>Cargando...</h5>}>
            <WeeklyNewResource
              activeProject={props.activeProject}
              handleForm={handleFormsChanges}
            />
          </Suspense>
        </>
      );
    case "Daily":
      return (
        <>
          <Suspense fallback={<h5>Cargando...</h5>}>
            <DailyNewResource
              activeProject={props.activeProject}
              handleForm={handleFormsChanges}
            />
          </Suspense>
        </>
      );
    case "Tools":
      return (
        <>
          <Suspense fallback={<h5>Cargando...</h5>}>
            <ToolsNewResource
              activeProject={props.activeProject}
              handleForm={handleFormsChanges}
            />
          </Suspense>
        </>
      );
    case "Source":
      return (
        <>
          <Suspense fallback={<h5>Cargando...</h5>}>
            <SourceNewResource
              activeProject={props.activeProject}
              handleForm={handleFormsChanges}
            />
          </Suspense>
        </>
      );
    default:
      "S";
      break;
  }
}
