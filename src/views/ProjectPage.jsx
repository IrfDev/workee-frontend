import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "@reach/router";

import Container from "@material-ui/core/Container";
import { CircularProgress } from "@material-ui/core";

import BottomNav from "Containers/nav/BottomNavProjects";
import PageContent from "Molecules/PageContent";
import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";

import { GET_PROJECT_BY_ID } from "GQL/queries";

export default function ProjectPage(props) {
  const activeProject = useQuery(GET_PROJECT_BY_ID, {
    variables: {
      id: props.title,
    },
  });

  return activeProject.error ? (
    activeProject.error.message.includes("Unauthorized") ? (
      <Redirect to="/login" noThrow />
    ) : activeProject.error.message.includes(
        "CompactToken validation failed"
      ) ||
      activeProject.error.message.includes("Unauthorized from Microsoft") ? (
      <>
        <h1>Failed gettin the Mircosoft Auth Token</h1>
        <h4>Please Login again</h4>
        <MicrosoftLogin />
      </>
    ) : (
      <>
        <h1>Sorry! There was an unknown error</h1>
        <p>{activeProject.error}</p>
      </>
    )
  ) : (
    <div>
      {!activeProject.loading && activeProject.data ? (
        <div>
          <h1>{activeProject.data.getProjectById.title}</h1>
          <Container>
            <PageContent
              param={props.nav.activeNav}
              project={activeProject.data.getProjectById}
            />
          </Container>
          <BottomNav activeProject={activeProject.data.getProjectById.id} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
