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
    <>
      <h1>Tasks</h1>
      {!getDaily.loading ? (
        !getDaily.error ? (
          getDaily.data.getProjectById.daily.tasks.map((task, taskIndex) => (
            <TaskCard key={taskIndex} task={task} />
          ))
        ) : (
          <div>
            <h1>Error while fetching Weekly project try reloading</h1>
            <p>{getDaily.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
