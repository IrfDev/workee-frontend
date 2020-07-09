import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { Chip, CircularProgress } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function SelectGithubRepos(props) {
  const GET_GITHUB_REPOS = gql`
    query {
      getAllGithubRepos {
        id
        name
      }
    }
  `;

  const githubRepos = useQuery(GET_GITHUB_REPOS);
  console.log("github:", githubRepos);

  return (
    <div>
      <h3>Selecciona un repositorio activo de Github</h3>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="repo-input">Selecciona tu repo</InputLabel>
        <Select
          labelId="repo-input"
          id="repo-id-input"
          autoWidth={true}
          onChange={(e) => props.addRepos(e)}
        >
          {!githubRepos.loaging && githubRepos.data ? (
            githubRepos.data.getAllGithubRepos.map((repo) => (
              <MenuItem key={repo.id} value={repo}>
                {repo.name}
              </MenuItem>
            ))
          ) : (
            <CircularProgress />
          )}
        </Select>
      </FormControl>
      <Chip
        label={props.formState.repo.name}
        onDelete={() => props.deleteRepo()}
      />
    </div>
  );
}
