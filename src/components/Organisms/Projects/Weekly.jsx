import React from "react";

import { CircularProgress } from "@material-ui/core";

import BoardCard from "Molecules/HomeCards/BoardCard.jsx";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_WEEKLY_PROJECT } from "GQL/queries";
import { DELETE_RESOURCE } from "GQL/mutations";

export default function Weekly(props) {
  const getWeekly = useQuery(GET_WEEKLY_PROJECT, {
    variables: {
      idWeekly: props.activeProject,
    },
  });

  console.log("[GetWeeklyQuery]:", getWeekly);

  const [deleteResource, { data }] = useMutation(DELETE_RESOURCE);
  // {
  // update(
  //   cache,
  //   {
  //     data: {
  //       pullInProject: {
  //         data: { id: idProjectCache, resourceId: idResourceCache },
  //       },
  //     },
  //   }
  // ) {
  //   const {
  //     getProjectById: {
  //       id: idProject,
  //       weekly: { boards: boardsArrayQuery },
  //     },
  //   } = cache.readQuery({
  //     query: GET_WEEKLY_PROJECT,
  //     variables: {
  //       idWeekly: idProjectCache,
  //     },
  //   }

  //     console.log("Query inside cache", boardsArrayQuery, idResourceCache);

  //     const boardsArrayFilter = boardsArrayQuery.filter(
  //       (board) => board.id !== idResourceCache
  //     );
  //     console.log("[BoardsFilter]:", boardsArrayFilter, idResourceCache);

  //     const queryData = {
  //       id: idProject,
  //       weekly: { boards: boardsArrayFilter },
  //     };

  //     console.log("[QueryData]:", queryData);

  //     cache.writeQuery({
  //       query: GET_WEEKLY_PROJECT,
  //       id: idProject,
  //       variables: {
  //         Project: idProject,
  //       },
  //       data: {
  //         Project: {
  //           getProjectById: queryData,
  //         },
  //       },
  //     });
  //   },
  // }

  const handleDeleteBoard = async ({ resourceId }) => {
    let projectId = String(props.activeProject);
    let resource = String(resourceId);
    deleteResource({
      variables: {
        id: projectId,
        target: "weekly.boards",
        resourceId: resource,
      },
      refetchQueries: [
        {
          query: GET_WEEKLY_PROJECT,
          variables: {
            idWeekly: projectId,
          },
        },
      ],
    });
  };
  console.log("[Deleted board]:", data);

  return (
    <div className="row m-0 justify-content-around ">
      <div className="col-12 mt-3 text-center">
        <h2>Weekly</h2>
      </div>

      {!getWeekly.loading ? (
        !getWeekly.error ? (
          getWeekly.data.getProjectById.weekly.boards.map((board) => (
            <div key={board.id} className="col-12 mb-5 col-md-6 col-lg-4">
              <BoardCard deleteBoard={handleDeleteBoard} board={board} />
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
