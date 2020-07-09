import React, { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { CircularProgress } from "@material-ui/core/";
import InputLabel from "@material-ui/core/InputLabel";

import GithubReposInpit from "../../../Atoms/forms/GithubRepos.jsx";

import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import TagInput from "../../../Atoms/forms/TagsResourceInput.jsx";

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
    console.log("Befor norm", sectionsIdArra);

    return sectionsIdArra;
  };
  // Event handlers for Repos 🐙
  const handleRepoResource = (e) => {
    e.persist();
    return setState({
      ...state,
      repo: e.target.value,
    });
  };

  const deleteRepo = () => {
    return setState({
      ...state,
      repo: {},
    });
  };
  // Event handlers for Notebooks 📝

  const handleNotebookIdInput = (e) => {
    e.persist();
    console.log(e);
    return setState({ ...state, notebook: e.target.value });
  };

  const addNotebookSectionInput = (e) => {
    e.persist();
    const sectionsArray = state.notebookSections;
    const newSection = e.target.value;
    sectionsArray.push(newSection);
    setState({
      ...state,
      notebookSections: sectionsArray,
      notebookSectionInput: "",
    });
  };

  const deleteNotebookSections = (lastSection) => {
    let repos = state.notebookSections;
    let filterSections = repos.filter((section) => section !== lastSection);
    setState({
      ...state,
      notebookSections: filterSections,
      notebookSectionInput: "",
    });
  };

  // Handle resource events 🔨

  const handleTitleInput = (e) => {
    e.persist();
    setState({ ...state, resourceTitle: e.target.value });
  };

  const handleWebsiteInput = (e) => {
    e.persist();
    setState({ ...state, resourceWebsite: e.target.value });
  };

  // Handle target resource select event 🔥
  const handleActiveResource = (e) => {
    e.persist();
    setState({ ...state, activeResource: e.target.value });
  };

  const GET_ONENOTE_NOTEBOOKS = gql`
    query {
      getNotebooksFromOnenote {
        name: displayName
        id
      }
    }
  `;

  const GET_ONENOTE_SECTIONS = gql`
    query GetOnenoteNotebook($notebookId: String!) {
      getSectionsFromOnenote(notebookId: $notebookId) {
        name: displayName
        id
      }
    }
  `;

  const getNotebooks = useQuery(GET_ONENOTE_NOTEBOOKS);
  console.log("Get notebooks:", getNotebooks);

  const getSections = useQuery(GET_ONENOTE_SECTIONS, {
    variables: { notebookId: state.notebook },
  });

  const renderSwitch = () => {
    switch (state.activeResource) {
      case "Repo":
        return (
          <GithubReposInpit
            addRepos={handleRepoResource}
            deleteRepo={deleteRepo}
            formState={state}
          />
        );

      case "Notebooks":
        return (
          <>
            <h5>Agrega tu Notebook</h5>
            <FormControl variant="filled" fullWidth={true}>
              <InputLabel id="trello-list-input">
                Selecciona Notebook
              </InputLabel>
              <Select
                labelId="trello-list-input"
                id="trello-list-inputs"
                onChange={(e) => handleNotebookIdInput(e)}
                autoWidth={true}
              >
                {!getNotebooks.loading ? (
                  getNotebooks.data.getNotebooksFromOnenote.map((nb) => (
                    <MenuItem key={nb.id} value={nb.id}>
                      {nb.name}
                    </MenuItem>
                  ))
                ) : (
                  <CircularProgress />
                )}
              </Select>
            </FormControl>
            <FormControl variant="filled" fullWidth={true}>
              <InputLabel id="trello-list-input">
                Seleccionar secciones
              </InputLabel>
              <Select
                labelId="trello-list-input"
                id="trello-list-inputs"
                value={state.notebookSection}
                onChange={(e) => addNotebookSectionInput(e)}
                autoWidth={true}
              >
                {!getSections.loading && getSections.data ? (
                  getSections.data.getSectionsFromOnenote.map((nb) => (
                    <MenuItem key={nb.id} value={nb}>
                      {nb.name}
                    </MenuItem>
                  ))
                ) : (
                  <CircularProgress />
                )}
              </Select>
              {state.notebookSections.map((section, indexLink) => (
                <Chip
                  label={section.name}
                  key={indexLink}
                  onDelete={() => deleteNotebookSections(section)}
                />
              ))}
            </FormControl>
            <TagInput state={state} setState={setState} />
          </>
        );
      case "Resources":
        return (
          <>
            <h5>Agrega el nombre de tu recurso</h5>
            <FormControl variant="filled" fullWidth={true}>
              <TextField
                onChange={handleTitleInput}
                value={state.resourceTitle}
                id="basicTemplate"
                label="Name of your resource"
              />
            </FormControl>
            <h5>Agrega el sitio web de tu recurso</h5>
            <FormControl variant="filled" fullWidth={true}>
              <TextField
                onChange={handleWebsiteInput}
                value={state.resourceWebsite}
                id="basicTemplate"
                label="The url of the resource website"
              />
            </FormControl>
            <div>
              <TagInput state={state} setState={setState} />
              <div>
                {state.notebookSections.map((section, indexLink) => (
                  <Chip
                    label={section}
                    key={indexLink}
                    onDelete={() => deleteNotebookSection(section)}
                  />
                ))}
              </div>
            </div>
          </>
        );
      default:
        "S";
        break;
    }
  };

  const NEW_REPO = gql`
    mutation CreateRepo($githubId: String!) {
      createRepo(input: { githubId: $githubId }) {
        data {
          id
        }
      }
    }
  `;

  const NEW_RESOURCE = gql`
    mutation CreateResource(
      $website: String!
      $name: String!
      $tags: [String!]
    ) {
      createResource(input: { website: $website, name: $name, tags: $tags }) {
        data {
          id
        }
      }
    }
  `;

  const NEW_NOTEBOOK = gql`
    mutation CreateNotebook(
      $sections: [String!]
      $onenoteId: ID!
      $tags: [String!]
    ) {
      createNotebook(
        input: { sections: $sections, onenoteId: $onenoteId, tags: $tags }
      ) {
        data {
          id
        }
      }
    }
  `;

  const PUSH_NEW_RESOURCE = gql`
    mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {
      pushInProject(id: $id, data: $data, target: $target) {
        success
      }
    }
  `;

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
          console.log(response.data.createResource.data.id);
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
      <div>{renderSwitch()}</div>
      <Button variant="contained" color="primary" onClick={handleNewResource}>
        Enviar formulario
      </Button>
    </form>
  );
}
