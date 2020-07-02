import React, { Component } from "react";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default class SourceNewResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeResource:'Repo',
      repos:[''],
      notebook:"",
      notebookSections:[],
      notebookSectionInput:"",
      tags:[],
      newTagInput:"",
      resourceTitle:"",
      resourceWebsite:""
    };
  }
// Event handlers for Repos 🐙
  handleRepoResource = (e) => {
    e.persist()
    this.setState((state) => {
      const repoArray = state.repos;
      const newRepo = e.target.value;
      repoArray.push(newRepo);
      return {
        ...state,
        repos:repoArray,
      };
    });
  };

  deleteRepo = (previousRepo) => {
    this.setState((state) => {
      let repos = state.repos;
      let filterRepos = repos.filter((stream) => stream !== previousRepo);
      return {
        ...state,
        repos: filterRepos,
      };
    });
  };
// Event handlers for Notebooks 📝

handleNotebookIdInput = (e) => {
    e.persist()
    this.setState((previousState) => {
      return {notebook: e.target.value , ...previousState};
    });
  };

  addNotebookSectionInput = (e) => {
    e.persist()
    this.setState((state) => {
      const sectionsArray = state.notebookSections;
      const newSection = e.target.value;
      sectionsArray.push(newSection);
      return {
        ...state,
        notebookSections: sectionsArray,
        notebookSectionInput: "",
      };
    });
  };

  deleteNotebookSections = (lastSection) => {
    this.setState((state) => {
      let repos = state.notebookSections;
      let filterSections = repos.filter((section) => section !== lastSection);
      return {
        ...state,
        notebookSections: filterSections,
        notebookSectionInput: "",
      };
    });
  };

// Event handler for tags 🔖
  addTags = () => {
    this.setState((state) => {
      const tagsArray = state.tags;
      const newTag = state.newTagInput;
      tagsArray.push(newTag);
      return {
        ...state,
        tags: tagsArray,
        newTagInput: "",
      };
    });
  };

  deleteTag = (newTag) => {
    this.setState((state) => {
      const tags = state.tags;
      const tagsWithoutDeletedTag = tags.filter((tag) => tag !== newTag);
      return {
        ...state,
        tags: tagsWithoutDeletedTag,
        newTagInput: "",
      };
    });
  };

   newTagInput = (e) => {
    e.persist()
    this.setState((state)=>{
      return {
        ...state,
        newTagInput: e.target.value,
      }
    })
  };

// Handle resource events 🔨

handleTitleInput = (e) => {
  e.persist()
  this.setState((previousState) => {
    return { ...previousState, resourceTitle: e.target.value };
  });
};

handleWebsiteInput = (e) => {
  e.persist()
  this.setState((previousState) => {
    return { ...previousState, resourceWebsite: e.target.value };
  });
};

// Handle target resource select event 🔥
  handleActiveResource = (e) => {
    e.persist()
    this.setState((previousState) => {
      return { ...previousState, activeResource: e.target.value };
    });
  };


  renderSwitch = () => {
    switch (this.state.activeResource) {
      case "Repo":
        return (
          <>
        <h5>Agrega tus repos</h5>
          <FormControl variant="filled" fullWidth={true} >
            <InputLabel id="trello-list-input">Agregar Repo</InputLabel>
                <Select
                  labelId="trello-list-input"
                  id="trello-list-inputs"
                  value={this.state.repo}
                  onChange={this.handleRepoResource}
                  autoWidth={true}
                >
                  <MenuItem value={"Stream"}>Stream</MenuItem>
                  <MenuItem value={"Hero"}>Hero</MenuItem>
                </Select>
          </FormControl>
        {
          this.state.repos.map((repos, repoIndex) =>  (
            <Chip label={repos} key={repoIndex} onDelete={()=>this.deleteRepo(repos)} />  
          )
        )}
        </>
        );
      case "Notebooks":
        return (
          <>
          <h5>Agrega tu Notebook</h5>
          <FormControl variant="filled" fullWidth={true} >
            <InputLabel id="trello-list-input">Selecciona Notebook</InputLabel>
                <Select
                  labelId="trello-list-input"
                  id="trello-list-inputs"
                  value={this.state.notebook}
                  onChange={this.handleNotebookIdInput}
                  autoWidth={true}
                >
                  <MenuItem value={"Stream"}>Stream</MenuItem>
                  <MenuItem value={"Hero"}>Hero</MenuItem>
                </Select>
          </FormControl>
        <h5>Agrega nuevos tags</h5>
        <div>
          <FormControl onChange={this.newTagInput}>
            <TextField
              value={this.state.newTagInput}
              id="basicTemplate"
              label="NewTag"
            />
          </FormControl>
          <Button onClick={this.addTags} color="primary">Agregar Tag</Button>
          <div>
            {
              this.state.tags.map((tag, indexLink) =>  (
                <Chip label={tag} key={indexLink} onDelete={()=>this.deleteTag(tag)} />  
              )
            )}
          </div>
          </div>
          <FormControl variant="filled" fullWidth={true} >
            <InputLabel id="trello-list-input">Seleccionar secciones</InputLabel>
                <Select
                  labelId="trello-list-input"
                  id="trello-list-inputs"
                  value={this.state.notebookSection}
                  onChange={this.addNotebookSectionInput}
                  autoWidth={true}
                >
                  <MenuItem value={"Stream"}>Stream</MenuItem>
                  <MenuItem value={"Hero"}>Hero</MenuItem>
                </Select>
                {
              this.state.notebookSections.map((section, indexLink) =>  (
                <Chip label={section} key={indexLink} onDelete={()=>this.deleteNotebookSections(section)} />  
              )
            )}
          </FormControl>
          </>
        );
      case "Resources":
        return (
        <>
          <h5>Agrega el nombre de tu recurso</h5>
          <FormControl variant="filled" fullWidth={true} >
            <TextField
              onChange={this.handleTitleInput}
              value={this.state.resourceTitle}
              id="basicTemplate"
              label="Nombre de tu heroe"
            />
          </FormControl>
          <h5>Agrega el sitio web de tu recurso</h5>
          <FormControl variant="filled" fullWidth={true} >
            <TextField
              onChange={this.handleTitleInput}
              value={this.state.title}
              id="basicTemplate"
              label="Nombre de tu heroe"
            />
          </FormControl>
          <div>
          <FormControl onChange={this.newTagInput}>
            <TextField
              value={this.state.newTagInput}
              id="basicTemplate"
              label="NewTag"
            />
          </FormControl>
          <Button onClick={this.addTags} color="primary">Agregar Tag</Button>
          <div>
            {
              this.state.notebookSections.map((section, indexLink) =>  (
                <Chip label={section} key={indexLink} onDelete={()=>this.deleteNotebookSection(section)} />  
              )
            )}
          </div>
          </div>
        </>
          );
      default:
        "S";
        break;
    }
  };
  render() {
    return (
      <form>
        <h5>Selecciona el recurso que quieres agregar</h5>
        <FormControl variant="filled" fullWidth={true}>
              <InputLabel id="trello-list-input">Recurso</InputLabel>
              <Select
                labelId="trello-list-input"
                id="trello-list-inputs"
                value={this.state.activeResource}
                onChange={this.handleActiveResource}
                autoWidth={true}
              >
                <MenuItem value={"Repo"}>Repo</MenuItem>
                <MenuItem value={"Notebooks"}>Notebooks</MenuItem>
                <MenuItem value={"Resources"}>Resources</MenuItem>
              </Select>
          </FormControl>
          <div>{this.renderSwitch()}</div>
          <Button variant="contained" color="primary" onClick={()=>this.props.handleForm(this.state)}>Enviar formulario</Button>
      </form>
    );
  }
}
