import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { CircularProgress } from "@material-ui/core";

import TaskCard from "Molecules/cards/TaskCard.jsx";

import { GET_DAILY_PROJECT } from "GQL/queries";
import { DELETE_RESOURCE } from "GQL/mutations";

export default function Daily(props) {
  const getDaily = useQuery(GET_DAILY_PROJECT, {
    variables: {
      id: props.activeProject,
    },
  });

  const [deleteResource, { data }] = useMutation(DELETE_RESOURCE);

  const handleDeleteTask = ({ resourceId }) => {
    let projectId = String(props.activeProject);
    let resource = String(resourceId);

    deleteResource({
      variables: {
        id: projectId,
        target: "daily.tasks",
        resourceId: resource,
      },
      refetchQueries: [
        {
          query: GET_DAILY_PROJECT,
          variables: {
            id: props.activeProject,
          },
        },
      ],
    });
  };

  return (
    <div className="row m-0">
      <div className="col-12 text-center">
        <h2>Tasks</h2>
      </div>
      {!getDaily.loading ? (
        !getDaily.error && getDaily.data.getProjectById.daily ? (
          getDaily.data.getProjectById.daily.tasks.map((task, taskIndex) => (
            <div key={taskIndex} className="col-12 col-md-4 col-lg-3">
              <TaskCard task={task} deleteTask={handleDeleteTask} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-4">
            <h4>
              {getDaily.error
                ? "Error while fetching Weekly project try reloading"
                : "Please create some tasks for your project"}
            </h4>
            <p>
              {getDaily.error
                ? getDaily.error.message
                : "Your tasks will appear here. Start creating one"}
            </p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
