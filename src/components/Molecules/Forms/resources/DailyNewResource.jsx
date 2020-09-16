import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import TagsInput from "Atoms/forms/TagsResourceInput.jsx";

import { NEW_TASK, PUSH_NEW_TASK } from "GQL/mutations";
import { GET_DAILY_PROJECT } from "GQL/queries";

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

    const pushBoardResponse = await pushNewTask({
      variables: {
        id: props.activeProject,
        target: "daily.tasks",
        data: taskId,
      },
      refetchQueries: [
        {
          query: GET_DAILY_PROJECT,
          variables: {
            id: props.activeProject,
          },
        },
      ],
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
