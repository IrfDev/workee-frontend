import React, { Component } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

export default class DailyNewResource extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", about: "", tags: [], newTagInput: "", };
  }

   handleTitleInput = (e) => {
    e.persist()
    this.setState((previousState) => {
      return { ...previousState, title: e.target.value };
    });
  };

   handleAboutInput = (e) => {
    e.persist()
    this.setState((previousState) => {
      return { ...previousState, about: e.target.value };
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
        <h5>Agrega una tarea a tu día</h5>
        <FormControl variant="filled" fullWidth={true} onChange={this.handleTitleInput}>
          <TextField
                value={this.state.title}
                id="basicTemplate"
                label="Nombre de tu tarea"
              />
        </FormControl>
        <h5>Agrega una descripción a tu tarea</h5>
        <FormControl variant="filled" fullWidth={true} onChange={this.handleAboutInput}>
        <TextField
              value={this.state.about}
              id="basicTemplate"
              multiline={true}
              rows={4}
              label="Descripción"
            />
        </FormControl>
        <h5>Agrega nuevos tags</h5>
        <div>
          <FormControl onChange={this.newTagInput}>
            <TextField
              // onKeyPress={(e) => console.log("keypress", e.ke)}
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
