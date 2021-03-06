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
  setBasicInfoProject,
  basicProjectInfo,
}) {
  switch (step) {
    case 0:
      return (
        <form>
          <h4>Basic</h4>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth={true}
            onChange={(e) =>
              handlingBasicProjectInput("name", e, {
                basicProjectInfo,
                setBasicInfoProject,
              })
            }
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            fullWidth={true}
            variant="outlined"
            rows={4}
            onChange={(e) =>
              handlingBasicProjectInput("description", e, {
                basicProjectInfo,
                setBasicInfoProject,
              })
            }
          />
        </form>
      );
    case 1:
      return (
        <TrelloBoardsInput
          handler={handlingBasicProjectInput}
          formState={basicProjectInfo}
          setBasicInfoProject={setBasicInfoProject}
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
              onChange={(e) =>
                handlingBasicProjectInput("repo", e, {
                  basicProjectInfo,
                  setBasicInfoProject,
                })
              }
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
