import React, { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TagsInput from "../../../Atoms/forms/TagsResourceInput.jsx";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function DailyNewResource(props) {
  const [previousState, setNewDailyObject] = useState({
    title: "",
    about: "",
    tags: [],
    newTagInput: "",
  });

  // Title input 📝
  const handleTitleInput = (e) => {
    e.persist();
    setNewDailyObject({ ...previousState, title: e.target.value });
  };

  const handleAboutInput = (e) => {
    e.persist();
    setNewDailyObject({ ...previousState, about: e.target.value });
  };

  const NEW_TASK = gql`
    mutation CreatTask(
      $tags: [String!]
      $resource: resourceInput!
      $type: String
    ) {
      createTask(input: { tags: $tags, resource: $resource, type: $type }) {
        success
        data {
          id
        }
      }
    }
  `;

  const PUSH_NEW_TASK = gql`
    mutation PushTaskIntoProject($id: ID!, $target: String!, $data: String!) {
      pushInProject(id: $id, data: $data, target: $target) {
        success
      }
    }
  `;

  const [createTasks] = useMutation(NEW_TASK);
  const [pushNewTask] = useMutation(PUSH_NEW_TASK);

  const handleNewTask = async () => {
    const newTaskResponse = await createTasks({
      variables: {
        type: "manual",
        resource: {
          title: previousState.title,
          about: previousState.about,
        },
        tags: previousState.tags,
      },
    });

    let taskId = newTaskResponse.data.createTask.data.id;
    console.log(newTaskResponse);

    const pushBoardResponse = await pushNewTask({
      variables: {
        id: props.activeProject,
        target: "daily.tasks",
        data: taskId,
      },
    });

    if (pushBoardResponse.data.pushInProject.success) {
      return props.handleForm();
    } else {
      return <p>Error during project updating, please try again!</p>;
    }
  };

  return (
    <form>
      <h5>Agrega una tarea a tu día</h5>
      <FormControl
        variant="filled"
        fullWidth={true}
        onChange={handleTitleInput}
      >
        <TextField
          value={previousState.title}
          id="basicTemplate"
          label="Nombre de tu tarea"
        />
      </FormControl>
      <h5>Agrega una descripción a tu tarea</h5>
      <FormControl
        variant="filled"
        fullWidth={true}
        onChange={handleAboutInput}
      >
        <TextField
          value={previousState.about}
          id="basicTemplate"
          multiline={true}
          rows={4}
          label="Descripción"
        />
      </FormControl>
      <TagsInput state={previousState} setState={setNewDailyObject} />
      <Button onClick={handleNewTask} variant="contained" color="primary">
        Enviar formulario
      </Button>
    </form>
  );
}
