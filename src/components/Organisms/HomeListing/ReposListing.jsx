import React from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core/";
import RepoItem from "../../Molecules/RepoItem.jsx";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function ReposListing(props) {
  const GET_GITHUB_REPOS = gql`
    query {
      getAllGithubRepos {
        language
        id
        description
        Title: name
        owner {
          login
          avatar_url
        }
      }
    }
  `;

  const allGithubRepos = useQuery(GET_GITHUB_REPOS);
  console.log(allGithubRepos);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Repos</h1>
      </Grid>
      {!allGithubRepos.loading && allGithubRepos.data ? (
        allGithubRepos.data.getAllGithubRepos.map((repo) => (
          <Grid key={repo.key} item xs={12}>
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
