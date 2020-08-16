import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core/";

import RepoItem from "../../Molecules/RepoItem.jsx";
import { GET_GITHUB_REPOS } from "GQL/queries";

export default function ReposListing() {
  const allGithubRepos = useQuery(GET_GITHUB_REPOS);

  console.log("[RepoListingQuery]", allGithubRepos);

  return (
    // <Grid container spacing={2}>
    <div className="row m-0 align-items-stretch align-content-stretch">
      <div className="col-12 text-center">
        <h2>Repos</h2>
      </div>

      {!allGithubRepos.loading && allGithubRepos.data ? (
        allGithubRepos.data.getAllGithubRepos.map((repo, repoIndex) =>
          repoIndex < 6 ? (
            <div
              key={repoIndex}
              className="align-self-stretch col-12 col-md-6 col-lg-4"
            >
              <RepoItem
                Title={repo.name}
                description={repo.description}
                technologies={repo.tecnologies}
                language={repo.language}
              />
            </div>
          ) : (
            ""
          )
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
