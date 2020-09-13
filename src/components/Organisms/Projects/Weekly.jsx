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

  return (
    <div className="row m-0 justify-content-around ">
      <div className="col-12 mt-3 text-center">
        <h2>Weekly</h2>
      </div>

      {!getWeekly.loading ? (
        !getWeekly.error ? (
          getWeekly.data.getProjectById.weekly.boards.map((board) => (
            <div key={board.id} className="col-12 mb-5 col-md-6 col-lg-4">
              <BoardCard board={board} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <h4>Error while fetching Weekly project try reloading</h4>
            <p>{getWeekly.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
