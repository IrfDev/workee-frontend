import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Redirect } from "@reach/router";

import { CircularProgress } from "@material-ui/core";

import ImageCardContainer from "Molecules/HomeCards/BasicCard.jsx";

import { GET_ALL_PROJECTS } from "GQL/queries";
import { DELETE_PROJECT } from "GQL/mutations";

export default function ProjectListing() {
  const projects = useQuery(GET_ALL_PROJECTS);

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    update(
      cache,
      {
        data: {
          deleteProject: {
            data: { id: dataResultCache },
          },
        },
      }
    ) {
      const { getAllProjects: projectsArray } = cache.readQuery({
        query: GET_ALL_PROJECTS,
      });

      const projectsArrayFilter = projectsArray.filter(
        (project) => project.id !== dataResultCache
      );

      cache.writeQuery({
        query: GET_ALL_PROJECTS,
        data: { getAllProjects: projectsArrayFilter },
      });
    },
  });

  const handleDeleteProject = ({ title, id }) => {
    deleteProject({
      variables: {
        title,
        id,
      },
    });
  };

  return projects.error ? (
    projects.error.message.includes("Unauthorized") ? (
      <Redirect to="/" noThrow />
    ) : (
      <h1>Sorry we couldnt display the projects</h1>
    )
  ) : (
    <div className="row m-0 justify-content-around mt-5">
      <div className="col-12 text-center">
        <h1>Projects</h1>
      </div>

      {projects.loading === false ? (
        projects.data.getAllProjects.map((project) => (
          <div key={project.id} className=" mt-3 mb-3 col-12 col-md-6 col-lg-4">
            {/* <Link to={`/app/projects/${project.id}`}> */}
            <ImageCardContainer
              deleteProject={handleDeleteProject}
              project={project}
            />
            {/* </Link> */}
          </div>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
