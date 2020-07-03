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
      activeResource: "Hero",
      newLinkName: "",
      newLinkUrl: "",
      heroTags: [],
      heroLinks: [],
      newTagInput: "",
      newHeroLinkInput: "",
      streams: [],
      hero: {},
    };
  }
  // Handle activeResource select
  handleTitleInput = (e) => {
    e.persist();
    this.setState((previousState) => {
      return { hero: { name: e.target.value }, ...previousState };
    });
  };

  handleActiveResource = (e) => {
    e.persist();
    this.setState((previousState) => {
      return { ...previousState, activeResource: e.target.value };
    });
  };

  handleStreamResource = (e) => {
    e.persist();
    this.setState((state) => {
      const streamArray = state.streams;
      const newStream = e.target.value;
      streamArray.push(newStream);
      return {
        ...state,
        streams: streamArray,
      };
    });
  };

  handleAboutInput = (e) => {
    e.persist();
    this.setState((previousState) => {
      return { ...previousState, about: e.target.value };
    });
  };

  addTags = () => {
    this.setState((state) => {
      const tagsArray = state.heroTags;
      const newTag = state.newTagInput;
      tagsArray.push(newTag);
      return {
        ...state,
        tags: tagsArray,
        newTagInput: "",
      };
    });
  };

  addLink = () => {
    this.setState((state) => {
      const linksArray = state.heroLinks;
      const newLink = state.newHeroLinkInput;
      linksArray.push(newLink);
      return {
        ...state,
        heroLinks: linksArray,
        newHeroLinkInput: "",
      };
    });
  };

  deleteLink = (newTag) => {
    this.setState((state) => {
      const tags = state.heroLinks;
      const tagsWithoutDeletedTag = tags.filter((tag) => tag !== newTag);
      return {
        ...state,
        heroLinks: tagsWithoutDeletedTag,
        newHeroLinkInput: "",
      };
    });
  };

  deleteTag = (newTag) => {
    this.setState((state) => {
      const tags = state.heroTags;
      const tagsWithoutDeletedTag = tags.filter((tag) => tag !== newTag);
      return {
        ...state,
        heroTags: tagsWithoutDeletedTag,
        newTagInput: "",
      };
    });
  };

  deleteStream = (previousStream) => {
    this.setState((state) => {
      const stream = state.streams;
      const filterStream = stream.filter((stream) => stream !== previousStream);
      return {
        ...state,
        streams: filterStream,
        newTagInput: "",
      };
    });
  };

  newTagInput = (e) => {
    e.persist();
    this.setState((state) => {
      return {
        ...state,
        newTagInput: e.target.value,
      };
    });
  };
  newHeroLinkInput = (e) => {
    e.persist();
    this.setState((state) => {
      return {
        ...state,
        newHeroLinkInput: e.target.value,
      };
    });
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
            <MenuItem value={"Stream"}>Stream</MenuItem>
            <MenuItem value={"Hero"}>Hero</MenuItem>
          </Select>
        </FormControl>
        <div className="form-content">
          {this.state.activeResource === "Hero" ? (
            <>
              <h5>Agrega el nombre de tu heroe</h5>
              <FormControl variant="filled" fullWidth={true}>
                <TextField
                  onChange={this.handleTitleInput}
                  value={this.state.title}
                  id="basicTemplate"
                  label="Nombre de tu heroe"
                />
              </FormControl>
              <h5>Arega los links de tu heroe</h5>
              <div>
                <FormControl onChange={this.newHeroLinkInput}>
                  <TextField
                    value={this.state.newHeroLinkInput}
                    id="basicTemplate"
                    label="Nuevo link"
                  />
                </FormControl>
                <Button onClick={this.addLink} color="primary">
                  Agregar Link
                </Button>
                <div>
                  {this.state.heroLinks.map((link, indexTag) => (
                    <Chip
                      label={link}
                      key={indexTag}
                      onDelete={() => this.deleteLink(link)}
                    />
                  ))}
                </div>
              </div>
              <h5>Agrega nuevos tags</h5>
              <div>
                <FormControl onChange={this.newTagInput}>
                  <TextField
                    value={this.state.newTagInput}
                    id="basicTemplate"
                    label="NewTag"
                  />
                </FormControl>
                <Button onClick={this.addTags} color="primary">
                  Agregar Tag
                </Button>
                <div>
                  {this.state.heroTags.map((tag, indexLink) => (
                    <Chip
                      label={tag}
                      key={indexLink}
                      onDelete={() => this.deleteTag(tag)}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <h5>Agrega el stream</h5>
              <FormControl variant="filled" fullWidth={true}>
                <InputLabel id="trello-list-input">Agregar Stream</InputLabel>
                <Select
                  labelId="trello-list-input"
                  id="trello-list-inputs"
                  value={this.state.stream}
                  onChange={this.handleStreamResource}
                  autoWidth={true}
                >
                  <MenuItem value={"Stream"}>Stream</MenuItem>
                  <MenuItem value={"Hero"}>Hero</MenuItem>
                </Select>
              </FormControl>
              {this.state.streams.map((stream, indexTag) => (
                <Chip
                  label={stream}
                  key={indexTag}
                  onDelete={() => this.deleteStream(stream)}
                />
              ))}
            </>
          )}
        </div>
        <Button
          onClick={() => this.props.handleForm(this.state)}
          variant="contained"
          color="primary"
        >
          Enviar formulario
        </Button>
      </form>
    );
  }
}
