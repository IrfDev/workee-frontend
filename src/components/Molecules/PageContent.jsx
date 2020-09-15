import React, { Suspense } from "react";
import { CircularProgress } from "@material-ui/core";

const Daily = React.lazy(() => import("Organisms/Projects/Daily.jsx"));
const Resource = React.lazy(() => import("Organisms/Projects/Resource.jsx"));
const Source = React.lazy(() => import("Organisms/Projects/Source.jsx"));
const Weekly = React.lazy(() => import("Organisms/Projects/Weekly.jsx"));

const renderSwitch = ({ param, project }) => {
  switch (param) {
    case "Weekly":
      return (
        <Suspense fallback={<CircularProgress />}>
          <Weekly activeProject={project.id} />
        </Suspense>
      );

    case "Daily":
      return (
        <Suspense fallback={<CircularProgress />}>
          <Daily activeProject={project.id} />
        </Suspense>
      );

    case "Tools":
      return (
        <Suspense fallback={<CircularProgress />}>
          <Resource activeProject={project.id} />
        </Suspense>
      );

    case "Source":
      return (
        <Suspense fallback={<CircularProgress />}>
          <Source activeProject={project.id} />
        </Suspense>
      );

    default:
      <Weekly activeProject={project.id} boards={project.weekly.boards} />;
      break;
  }
};

export default renderSwitch;
