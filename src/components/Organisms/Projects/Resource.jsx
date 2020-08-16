import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "@reach/router";

import RepoCard from "Molecules/cards/RepoCard.jsx";
import NotebookCard from "Molecules/cards/NotebookCard.jsx";
import ResourceCard from "Molecules/cards/ResourceCard.jsx";
import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";

import { GET_RESOURCES_PROJECT } from "GQL/queries";
import { CircularProgress } from "@material-ui/core";

export default function Resource(props) {
  const getResources = useQuery(GET_RESOURCES_PROJECT, {
    variables: {
      id: props.activeProject,
    },
  });

  console.log("[Query] getResources:", getResources);

  return getResources.error ? (
    getResources.error.message.includes("Unauthorized!") ? (
      <Redirect to="/login" noThrow />
    ) : getResources.error.message.includes("CompactToken validation failed") ||
      getResources.error.message.includes("Unauthorized from Microsoft") ? (
      <>
        <h1>Failed gettin the Mircosoft Auth Token</h1>
        <h4>Please Login again</h4>
        <MicrosoftLogin />
      </>
    ) : (
      <>
        <h1>Sorry! There was an unknown error</h1>
        <p>{getResources.error}</p>
      </>
    )
  ) : (
    <>
      <h1>Resources</h1>
      <div>
        <h2>Repos</h2>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.repos ? (
              getResources.data.getProjectById.resources.repos.map((repo) => (
                <RepoCard key={Math.random()} repo={repo} />
              ))
            ) : (
              <h3>Create Some Repos for your project</h3>
            )
          ) : (
            <div>
              <h1>Error while fetching Repos project try reloading</h1>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
      <div>
        <h2>Notebooks</h2>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.notebooks ? (
              getResources.data.getProjectById.resources.notebooks.map(
                (notebook) => (
                  <NotebookCard key={Math.random()} notebook={notebook} />
                )
              )
            ) : (
              <h3>Create Some Notebooks for your project</h3>
            )
          ) : (
            <div>
              <h1>Error while fetching notebooks project try reloading</h1>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
      <div>
        <h2>Extras</h2>
        {!getResources.loading ? (
          !getResources.error ? (
            getResources.data.getProjectById.resources.resources ? (
              getResources.data.getProjectById.resources.resources.map(
                (resource) => (
                  <ResourceCard key={Math.random()} resource={resource} />
                )
              )
            ) : (
              <h3>Create Some resources for your project</h3>
            )
          ) : (
            <div>
              <h1>Error while fetching resources project try reloading</h1>
              <p>{getResources.error.message}</p>
            </div>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
}
