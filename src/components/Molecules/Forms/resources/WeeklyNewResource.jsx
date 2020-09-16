import React, { useState, Suspense } from "react";

import Button from "@material-ui/core/Button";

import TrelloBoardsInput from "Atoms/forms/TrelloBoardsInput.jsx";
const TagsInput = React.lazy(() => import("Atoms/forms/TagsResourceInput.jsx"));

import { useMutation } from "@apollo/react-hooks";

import { PUSH_NEW_BOARD, NEW_BOARD, GET_WEEKLY_PROJECT } from "GQL/queries";

export default function WeeklyNewResource(props) {
  const [lastState, setState] = useState({
    resourceid: "",
    activeList: "",
    tags: [],
    newTagInput: "",
  });

  const handlingBasicProjectInput = (target, event) => {
    event.persist();
    switch (target) {
      case "board":
        setState({ ...lastState, board: event.target.value });
        break;

      case "activeList":
        setState({ ...lastState, activeList: event.target.value });
        break;

      default:
        return "Unknown input";
    }
  };

  const [newBoard] = useMutation(NEW_BOARD);

  const [pushNewBoard] = useMutation(PUSH_NEW_BOARD);

  const handlingForm = async () => {
    const newBoardResponse = await newBoard({
      variables: { ...lastState, resourceid: lastState.board },
    });

    let boardId = newBoardResponse.data.createBoard.data.id;

    const pushBoardResponse = await pushNewBoard({
      variables: {
        id: props.activeProject,
        target: "weekly.boards",
        data: boardId,
      },
      refetchQueries: [
        {
          query: GET_WEEKLY_PROJECT,
          variables: {
            idWeekly: props.activeProject,
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
      <Suspense fallback={<h6>Waiting Trello boards</h6>}>
        <TrelloBoardsInput
          className="mt-3 mb-4"
          handler={handlingBasicProjectInput}
          formState={lastState}
        />
      </Suspense>
      <h5>Agrega una lista activa de tu tablero de Trello</h5>
      <TagsInput className="mt-3 mb-4" state={lastState} setState={setState} />
      <Button
        className="mt-3 mb-4"
        variant="contained"
        color="primary"
        onClick={handlingForm}
      >
        Enviar formulario
      </Button>
    </form>
  );
}
