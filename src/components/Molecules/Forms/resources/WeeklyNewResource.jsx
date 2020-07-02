import React, { Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

export default class WeeklyNewResource extends Component {
  constructor(props) {
    super(props);
    this.state = { resourceId: "", activeList: "", tags: [], newTagInput: "" };
  }

   handleBoardId = (e) => {
    this.setState((previousState) => {
      return { ...previousState, resourceId: e.target.value };
    });
  };

   handleActiveList = (e) => {
    this.setState((previousState) => {
      return { ...previousState, activeList: e.target.value };
    });
  };

   addTags = () => {
    this.setState((state) => {
      const tagsArray = state.tags;
      const newTag = state.newTagInput;
      tagsArray.push(newTag);
      return {
        ...state,
        tags:tagsArray,
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
  render() {
    return (
      <form>
        <h5>Agrega un tablero de Trello</h5>
        <FormControl variant="filled" fullWidth={true}>
          <InputLabel id="trello-list-input">Lista</InputLabel>
          <Select
            labelId="trello-list-input"
            id="trello-list-inputs"
            value={this.state.resourceId}
            onChange={this.handleBoardId}
            autoWidth={true}
          >
            <MenuItem value={"Weekly"}>AS</MenuItem>
            <MenuItem value={"Daily"}>Daily</MenuItem>
            <MenuItem value={"Source"}>Source</MenuItem>
            <MenuItem value={"Tools"}>Tools</MenuItem>
          </Select>
        </FormControl>
        <h5>Agrega una lista activa de tu tablero de Trello</h5>
        <FormControl variant="filled" fullWidth={true}>
          <InputLabel id="trello-list-input">Lista</InputLabel>
          <Select
            labelId="trello-list-input"
            id="trello-list-inputs"
            value={this.state.activeList}
            onChange={this.handleActiveList}
            autoWidth={true}
          >
            <MenuItem value={"List1"}>List1</MenuItem>
            <MenuItem value={"List2"}>List2</MenuItem>
            <MenuItem value={"List3"}>List3</MenuItem>
            <MenuItem value={"List4"}>List4</MenuItem>
          </Select>
        </FormControl>
        <h5>Agrega nuevos tags</h5>
        <div>
          <FormControl onChange={this.newTagInput}>
            <TextField
              // onKeyPress={(e) => ("keypress", e.ke)}
              value={this.state.newTagInput}
              id="basicTemplate"
              label="NewTag"
            />
          </FormControl>
          <Button onClick={this.addTags} color="primary">Agregar Tag</Button>
          <div >
            {
              this.state.tags.map((tag, indexTag) =>  (
                <Chip label={tag} key={indexTag} onDelete={()=>this.deleteTag(tag)} />  
              )
            )}
          </div>
        </div>
        <Button variant="contained" color="primary">Enviar formulario</Button>
      </form>
    );
  }
}
