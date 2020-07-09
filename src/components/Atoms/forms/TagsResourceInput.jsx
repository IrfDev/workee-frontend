import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";

export default function TagsResourceInput({ state, setState }) {
  const addTags = () => {
    const tagsArray = state.tags;

    const newTag = state.newTagInput;
    tagsArray.push(newTag);

    return setState({
      ...state,
      tags: tagsArray,
      newTagInput: "",
    });
  };

  const deleteTag = (newTag) => {
    const tags = state.tags;
    const tagsWithoutDeletedTag = tags.filter((tag) => tag !== newTag);

    return setState({
      ...state,
      tags: tagsWithoutDeletedTag,
      newTagInput: "",
    });
  };

  const newTagInput = (e) => {
    e.persist();

    return setState({
      ...state,
      newTagInput: e.target.value,
    });
  };

  return (
    <div>
      <h5>Agrega nuevos tags</h5>
      <FormControl onChange={newTagInput}>
        <TextField
          value={state.newTagInput}
          id="basicTemplate"
          label="NewTag"
        />
      </FormControl>
      <Button onClick={addTags} color="primary">
        Agregar Tag
      </Button>
      <div>
        {state.tags.length ? (
          state.tags.map((tag, indexTag) => (
            <Chip label={tag} key={indexTag} onDelete={() => deleteTag(tag)} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
