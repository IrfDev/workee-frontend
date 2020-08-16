import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link, Redirect } from "@reach/router";

import { CircularProgress } from "@material-ui/core";

import ImageCardContainer from "Molecules/HomeCards/BasicCard.jsx";
import { GET_ALL_PROJECTS } from "GQL/queries";

export default function ProjectListing() {
  // async componentDidMount() {
  //   await this.props.fetchProjects();
  // }
  // props.fetchProjects();

  const projects = useQuery(GET_ALL_PROJECTS);

  return projects.error ? (
    projects.error.message.includes("Unauthorized") ? (
      <Redirect to="/landing" noThrow />
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
            <Link to={`/app/projects/${project.id}`}>
              <ImageCardContainer project={project} />
            </Link>
          </div>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
