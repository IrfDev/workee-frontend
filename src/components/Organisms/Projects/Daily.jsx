import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress } from "@material-ui/core";

import TaskCard from "Molecules/cards/TaskCard.jsx";
import { GET_DAILY_PROJECT } from "GQL/queries";

export default function Daily(props) {
  const getDaily = useQuery(GET_DAILY_PROJECT, {
    variables: {
      id: props.activeProject,
    },
  });

  console.log("QUery Get Daily:", getDaily);
  return (
    <div className="row m-0">
      <div className="col-12 text-center">
        <h1>Tasks</h1>
      </div>
      {!getDaily.loading ? (
        !getDaily.error ? (
          getDaily.data.getProjectById.daily.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="col-12 col-md-6 col-lg-4">
              <TaskCard task={task} />
            </div>
          ))
        ) : (
          <div>
            <h3>Error while fetching Weekly project try reloading</h3>
            <p>{getDaily.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
