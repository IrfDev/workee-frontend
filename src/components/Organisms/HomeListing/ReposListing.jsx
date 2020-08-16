import React from "react";
import { useQuery } from "@apollo/react-hooks";

import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core/";

import RepoItem from "../../Molecules/RepoItem.jsx";
import { GET_GITHUB_REPOS } from "GQL/queries";

export default function ReposListing() {
  const allGithubRepos = useQuery(GET_GITHUB_REPOS);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Repos</h1>
      </Grid>
      {!allGithubRepos.loading && allGithubRepos.data ? (
        allGithubRepos.data.getAllGithubRepos.map((repo, repoIndex) => (
          <Grid key={repoIndex} item xs={12}>
            <RepoItem
              Title={repo.Title}
              description={repo.description}
              technologies={repo.tecnologies}
              language={repo.language}
            />
          </Grid>
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}
