import React from "react";

import { CircularProgress } from "@material-ui/core";

import BoardCard from "Molecules/HomeCards/BoardCard.jsx";

import { useQuery } from "@apollo/react-hooks";
import { GET_WEEKLY_PROJECT } from "GQL/queries";

export default function Weekly(props) {
  const getWeekly = useQuery(GET_WEEKLY_PROJECT, {
    variables: {
      idWeekly: props.activeProject,
    },
  });
  console.log(getWeekly);

  return (
    <>
      <h1>Weekly</h1>
      <div>
        {!getWeekly.loading ? (
          !getWeekly.error ? (
            getWeekly.data.getProjectById.weekly.boards.map((board) => (
              <BoardCard key={board.id} board={board} />
            ))
          ) : (
            <div>
              <h1>Error while fetching Weekly project try reloading</h1>
              <p>{getWeekly.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
}
