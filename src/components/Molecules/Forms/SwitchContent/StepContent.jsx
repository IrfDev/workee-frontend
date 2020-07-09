import React from "react";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import TrelloBoardsInput from "Atoms/forms/TrelloBoardsInput.jsx";

export default function getStepContent({
  step,
  handlingBasicProjectInput,
  githubRepos,
  basicProjectInfo,
}) {
  switch (step) {
    case 0:
      return (
        <div>
          <h4>Básico</h4>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            onChange={(e) => handlingBasicProjectInput("name", e)}
          />
          <TextField
            id="standard-multiline-static"
            label="Descripción"
            multiline
            variant="outlined"
            rows={4}
            onChange={(e) => handlingBasicProjectInput("description", e)}
          />
        </div>
      );
    case 1:
      return (
        <TrelloBoardsInput
          handler={handlingBasicProjectInput}
          formState={basicProjectInfo}
        />
      );
    case 2:
      return (
        <div>
          <h3>Selecciona un repositorio activo de Github</h3>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="repo-input">Selecciona tu repo</InputLabel>
            <Select
              labelId="repo-input"
              id="repo-id-input"
              value={"asidjaso8djas"}
              autoWidth={true}
              onChange={(e) => handlingBasicProjectInput("repo", e)}
            >
              {githubRepos.data.getAllGithubRepos.map((repo) => (
                <MenuItem key={repo.id} value={repo.id}>
                  {repo.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    default:
      return "Unknown step";
  }
}
