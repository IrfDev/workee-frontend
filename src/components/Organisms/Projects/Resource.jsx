import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Redirect } from "@reach/router";

import RepoCard from "Molecules/cards/RepoCard.jsx";
import NotebookCard from "Molecules/cards/NotebookCard.jsx";
import ResourceCard from "Molecules/cards/ResourceCard.jsx";
import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";

import { GET_RESOURCES_PROJECT } from "GQL/queries";
import { DELETE_RESOURCE } from "GQL/mutations";
import { CircularProgress } from "@material-ui/core";

export default function Resource(props) {
  const getResources = useQuery(GET_RESOURCES_PROJECT, {
    variables: {
      id: props.activeProject,
    },
  });

  const [deleteResource, { data }] = useMutation(DELETE_RESOURCE);

  const handleDeleteResource = ({ resourceId, target }) => {
    let projectId = String(props.activeProject);
    let resource = String(resourceId);

    deleteResource({
      variables: {
        id: projectId,
        target,
        resourceId: resource,
      },
      refetchQueries: [
        {
          query: GET_RESOURCES_PROJECT,
          variables: {
            id: props.activeProject,
          },
        },
      ],
    });
  };

  return getResources.error ? (
    getResources.error.message.includes("Unauthorized!") ? (
      <Redirect to="/login" noThrow />
    ) : getResources.error.message.includes("CompactToken validation failed") ||
      getResources.error.message.includes("Unauthorized from Microsoft") ? (
      <div className="row m-0 text-center">
        <div className="col-12">
          <h4>
            Failed getting the Mircosoft Auth Token
            <span role="img" aria-label="lock-emoji">
              🔓
            </span>
          </h4>
          <h5>
            Please Login again
            <span role="img" aria-label="hand-pointing-down-emoji">
              👇🏻
            </span>
          </h5>
          <MicrosoftLogin />
        </div>
      </div>
    ) : (
      <div className="col-12">
        <h4>Sorry! There was an unknown error</h4>
        <p>{getResources.error}</p>
      </div>
    )
  ) : (
    <div className="container-fluid">
      <div className="col-12 text-center">
        <h2>Resources</h2>
      </div>
      <div className="row m-0 align-items-stretch justify-content-around">
        <div className="col-12 text-center mt-3">
          <h3>Repos</h3>
        </div>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.repos ? (
              getResources.data.getProjectById.resources.repos.map((repo) => (
                <div
                  key={Math.random()}
                  className="col-md-5 col-lg-4 col-12 mb-3"
                >
                  <RepoCard deleteResource={handleDeleteResource} repo={repo} />
                </div>
              ))
            ) : (
              <h4>Create Some Repos for your project</h4>
            )
          ) : (
            <div>
              <h4>Error while fetching Repos project try reloading</h4>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="row m-0 justify-content-around align-items-center">
        <div className="col-12 text-center m-4">
          <h2>Notebooks</h2>
        </div>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.notebooks ? (
              getResources.data.getProjectById.resources.notebooks.map(
                (notebook, notebookIndex) => (
                  <div
                    key={notebookIndex}
                    className="col-md-5 col-lg-4 col-12 mb-5"
                  >
                    <NotebookCard
                      deleteResource={handleDeleteResource}
                      notebook={notebook}
                    />
                  </div>
                )
              )
            ) : (
              <h4>Create Some Notebooks for your project</h4>
            )
          ) : (
            <div>
              <h4>Error while fetching notebooks project try reloading</h4>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className="row m-0 justify-content-around align-items-center">
        <div className="col-12 text-center m-4">
          <h2>Extras</h2>
        </div>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.resources ? (
              getResources.data.getProjectById.resources.resources.map(
                (resource, resourceIndex) => (
                  <div
                    className="col-md-4 col-lg-3 col-12 mb-4"
                    key={resourceIndex}
                  >
                    <ResourceCard
                      deleteResource={handleDeleteResource}
                      resource={resource}
                    />
                  </div>
                )
              )
            ) : (
              <h4>Create Some resources for your project</h4>
            )
          ) : (
            <div>
              <h4>Error while fetching resources project try reloading</h4>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}
