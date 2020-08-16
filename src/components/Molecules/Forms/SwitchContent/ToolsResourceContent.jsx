import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { CircularProgress } from "@material-ui/core/";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { GET_ONENOTE_NOTEBOOKS, GET_ONENOTE_SECTIONS } from "GQL/queries";

import GithubReposInpit from "Atoms/forms/GithubRepos.jsx";
import TagInput from "Atoms/forms/TagsResourceInput.jsx";
import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";

export default function ToolsResourceContent(props) {
  const getNotebooks = useQuery(GET_ONENOTE_NOTEBOOKS);
  const getSections = useQuery(GET_ONENOTE_SECTIONS, {
    variables: { notebookId: props.state.notebook },
  });

  const handleTitleInput = (e) => {
    e.persist();
    props.setState({ ...props.state, resourceTitle: e.target.value });
  };

  const handleWebsiteInput = (e) => {
    e.persist();
    props.setState({ ...props.state, resourceWebsite: e.target.value });
  };

  const deleteNotebookSections = (lastSection) => {
    let repos = props.state.notebookSections;
    let filterSections = repos.filter((section) => section !== lastSection);
    props.setState({
      ...props.state,
      notebookSections: filterSections,
      notebookSectionInput: "",
    });
  };

  const handleNotebookIdInput = (e) => {
    e.persist();
    return props.setState({ ...props.state, notebook: e.target.value });
  };

  const addNotebookSectionInput = (e) => {
    e.persist();
    const sectionsArray = props.state.notebookSections;
    const newSection = e.target.value;
    sectionsArray.push(newSection);
    props.setState({
      ...props.state,
      notebookSections: sectionsArray,
      notebookSectionInput: "",
    });
  };

  const handleRepoResource = (e) => {
    e.persist();
    return props.setState({
      ...props.state,
      repo: e.target.value,
    });
  };

  const deleteRepo = () => {
    return props.setState({
      ...props.state,
      repo: {},
    });
  };

  switch (props.state.activeResource) {
    case "Repo":
      return (
        <GithubReposInpit
          addRepos={handleRepoResource}
          deleteRepo={deleteRepo}
          formState={props.state}
        />
      );

    case "Notebooks":
      return (
        <>
          <h5>Agrega tu Notebook</h5>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="trello-list-input">Selecciona Notebook</InputLabel>
            <Select
              labelId="trello-list-input"
              id="trello-list-inputs"
              onChange={(e) => handleNotebookIdInput(e)}
              autoWidth={true}
            >
              {!getNotebooks.loading ? (
                getNotebooks.error ? (
                  getNotebooks.error.message.includes(
                    "CompactToken validation failed"
                  ) ||
                  getNotebooks.error.message.includes(
                    "Unauthorized from Microsoft"
                  ) ? (
                    <>
                      <h1>Failed gettin the Mircosoft Auth Token</h1>
                      <h4>Please Login again</h4>
                      <MicrosoftLogin />
                    </>
                  ) : (
                    <>
                      <h1>
                        Sorry! There was an unknown error getting the notebooks
                      </h1>
                      <p>{getNotebooks.error}</p>
                    </>
                  )
                ) : (
                  getNotebooks.data.getNotebooksFromOnenote.map((nb) => (
                    <MenuItem key={nb.id} value={nb.id}>
                      {nb.name}
                    </MenuItem>
                  ))
                )
              ) : getNotebooks.error ? (
                getNotebooks.error.message.includes(
                  "CompactToken validation failed"
                ) ||
                getNotebooks.error.message.includes(
                  "Unauthorized from Microsoft"
                ) ? (
                  <>
                    <h1>Failed gettin the Mircosoft Auth Token</h1>
                    <h4>Please Login again</h4>
                    <MicrosoftLogin />
                  </>
                ) : (
                  <>
                    <h1>
                      Sorry! There was an unknown error getting the notebooks
                    </h1>
                    <p>{getNotebooks.error}</p>
                  </>
                )
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
              value={props.state.notebookSection}
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
            {props.state.notebookSections.map((section, indexLink) => (
              <Chip
                label={section.name}
                key={indexLink}
                onDelete={() => deleteNotebookSections(section)}
              />
            ))}
          </FormControl>
          <TagInput state={props.state} setState={props.setState} />
        </>
      );
    case "Resources":
      return (
        <>
          <h5>Agrega el nombre de tu recurso</h5>
          <FormControl variant="filled" fullWidth={true}>
            <TextField
              onChange={handleTitleInput}
              value={props.state.resourceTitle}
              id="basicTemplate"
              label="Name of your resource"
            />
          </FormControl>
          <h5>Agrega el sitio web de tu recurso</h5>
          <FormControl variant="filled" fullWidth={true}>
            <TextField
              onChange={handleWebsiteInput}
              value={props.state.resourceWebsite}
              id="basicTemplate"
              label="The url of the resource website"
            />
          </FormControl>
          <div>
            <TagInput state={props.state} setState={props.setState} />
            <div>
              {props.state.notebookSections.map((section, indexLink) => (
                <Chip
                  label={section}
                  key={indexLink}
                  onDelete={() => deleteNotebookSections(section)}
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
}
