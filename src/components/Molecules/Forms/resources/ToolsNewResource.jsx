import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import TooleResourceContent from "Molecules/Forms/SwitchContent/TooleResourceContent.jsx";

import {
  NEW_REPO,
  NEW_NOTEBOOK,
  NEW_RESOURCE,
  PUSH_NEW_RESOURCE,
} from "GQL/mutations";

export default function SourceNewResource(props) {
  const [state, setState] = useState({
    activeResource: "Notebooks",
    repo: {},
    notebook: "",
    notebookSections: [],
    notebookSectionInput: "",
    tags: [],
    newTagInput: "",
    resourceTitle: "",
    resourceWebsite: "",
  });

  const normalizeNotebookIds = () => {
    // nb stands for Notebook
    const sectionsIdArra = state.notebookSections.map((nb) => nb.id);

    return sectionsIdArra;
  };
  // Event handlers for Repos 🐙

  const handleActiveResource = (e) => {
    e.persist();
    setState({ ...state, activeResource: e.target.value });
  };

  const [newRepo] = useMutation(NEW_REPO);
  const [newNotebook] = useMutation(NEW_NOTEBOOK);
  const [newResource] = useMutation(NEW_RESOURCE);
  const [pushNewSource] = useMutation(PUSH_NEW_RESOURCE);

  const handleNewResource = async () => {
    const notebooksId = normalizeNotebookIds();
    switch (state.activeResource) {
      case "Repo":
        await newRepo({
          variables: {
            githubId: state.repo.id,
          },
        }).then((response) => {
          pushNewSource({
            variables: {
              target: "resources.repos",
              data: response.data.createRepo.data.id,
              id: props.activeProject,
            },
          });
        });

        return props.handleForm();

      case "Notebooks":
        await newNotebook({
          variables: {
            sections: notebooksId,
            onenoteId: state.notebook,
            tags: state.tags,
          },
        }).then((response) => {
          pushNewSource({
            variables: {
              target: "resources.notebooks",
              data: response.data.createNotebook.data.id,
              id: props.activeProject,
            },
          });
        });

        return props.handleForm();

      case "Resources":
        await newResource({
          variables: {
            name: state.resourceTitle,
            website: state.resourceWebsite,
            tags: state.tags,
          },
        }).then((response) => {
          pushNewSource({
            variables: {
              id: props.activeProject,
              target: "resources.resources",
              data: response.data.createResource.data.id,
            },
          }).then((res) => console.log("Push source:", res));
        });

        return props.handleForm();

      default:
        break;
    }
  };
  return (
    <form>
      <h5>Selecciona el recurso que quieres agregar</h5>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="trello-list-input">Recurso</InputLabel>
        <Select
          labelId="trello-list-input"
          id="trello-list-inputs"
          value={state.activeResource}
          onChange={handleActiveResource}
          autoWidth={true}
        >
          <MenuItem value={"Repo"}>Repo</MenuItem>
          <MenuItem value={"Notebooks"}>Notebooks</MenuItem>
          <MenuItem value={"Resources"}>Resources</MenuItem>
        </Select>
      </FormControl>
      <div>
        <TooleResourceContent setState={setState} state={state} />
      </div>
      <Button variant="contained" color="primary" onClick={handleNewResource}>
        Enviar formulario
      </Button>
    </form>
  );
}
