import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Container from "@material-ui/core/Container";
import { CircularProgress } from "@material-ui/core";

import BottomNav from "Containers/nav/BottomNavProjects";
import PageContent from "Molecules/PageContent";

import { GET_PROJECT_BY_ID } from "GQL/queries";

export default function ProjectPage(props) {
  const activeProject = useQuery(GET_PROJECT_BY_ID, {
    variables: {
      id: props.title,
    },
  });

  console.log(activeProject);

  return (
    <div>
      {activeProject.loading !== true ? (
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
