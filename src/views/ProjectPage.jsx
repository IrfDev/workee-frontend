import React from "react";
import BottomNav from "../store/containers/nav/BottomNavProjects";
import Daily from "../components/Organisms/Projects/Daily.jsx";
import Resource from "../components/Organisms/Projects/Resource.jsx";
import Source from "../components/Organisms/Projects/Source.jsx";
import Weekly from "../components/Organisms/Projects/Weekly.jsx";
import Container from "@material-ui/core/Container";

import { useQuery } from "@apollo/react-hooks";

import { CircularProgress } from "@material-ui/core";
import gql from "graphql-tag";

export default function ProjectPage(props) {
  const renderSwitch = (param, project) => {
    switch (param) {
      case "Weekly":
        return <Weekly boards={project.weekly.boards} />;

      case "Daily":
        console.log(project);
        return project.daily ? (
          <Daily tasks={project.daily.tasks} />
        ) : (
          <h1>Create some tasks</h1>
        );

      case "Tools":
        return (
          <Resource
            repos={project.resources.repos}
            notebooks={project.resources.notebooks}
            resources={project.resources.resources}
          />
        );

      case "Source":
        return project.sources ? (
          <Source
            streams={project.sources.streams}
            heros={project.sources.heroes}
          />
        ) : (
          <h1>Create some sources</h1>
        );

      default:
        <Weekly boards={project.weekly.boards} />;
        break;
    }
  };

  const GET_PROJECT_BY_ID = gql`
    query GetProjectById($id: ID!) {
      getProjectById(id: $id) {
        title
        id
        daily {
          tasks {
            resource {
              title
              about
            }
            tags
          }
        }
        sources {
          heroes {
            name
            tags
            links {
              name: website
              url: urlLink
            }
          }
          streams {
            feedlyItems {
              id
              items {
                origin {
                  title
                  htmlUrl
                }
                webfeeds {
                  logo
                }
                keywords
                title
                content {
                  content
                }
                categories {
                  label
                }
                visual {
                  url
                }
                summary {
                  content
                }
                label
                author
              }
            }
          }
        }
        resources {
          notebooks {
            id
            onenoteId
            resource: onenoteNotebook {
              name: displayName
              url: sectionsUrl
            }
            sections: onenoteSections {
              name: displayName
              url: sectionsUrl
            }
          }
          resources {
            name
            tags
            website
          }
          repos {
            info: githubRepo {
              name
              owner {
                login
                avatar_url
              }
              description
              url
              language
            }
            technologies
          }
        }

        weekly {
          boards {
            id
            cards: trelloCardsFromActiveList {
              title: name
              date: dueReminder
              description: desc
              labels {
                green
                yellow
                orange
                red
                purple
                blue
                sky
                lime
                pink
                black
              }
            }
            info: trelloBoard {
              name
              prefs {
                backgroundImage
              }
              url: shortUrl
            }
            list: trelloActiveList {
              name
            }
          }
        }
      }
    }
  `;

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
            {renderSwitch(
              props.nav.activeNav,
              activeProject.data.getProjectById
            )}
          </Container>
          <BottomNav activeProject={activeProject.data.getProjectById.id} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
