import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TrelloBoardsInput from "../../../Atoms/forms/TrelloBoardsInput.jsx";
import TagsInput from "../../../Atoms/forms/TagsResourceInput.jsx";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

  const PUSH_NEW_BOARD = gql`
    mutation PushBoardIntoProject($id: ID!, $target: String!, $data: String!) {
      pushInProject(id: $id, data: $data, target: $target) {
        success
      }
    }
  `;

  const NEW_BOARD = gql`
    mutation CreateBoard(
      $resourceid: String!
      $activeList: String!
      $tags: [String!]
    ) {
      createBoard(
        input: { resourceid: $resourceid, activeList: $activeList, tags: $tags }
      ) {
        data {
          id
        }
      }
    }
  `;
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
    });

    if (pushBoardResponse.data.pushInProject.success) {
      return props.handleForm();
    } else {
      return <p>Error during project updating, please try again!</p>;
    }
  };

  return (
    <form>
      <TrelloBoardsInput
        handler={handlingBasicProjectInput}
        formState={lastState}
      />
      <h5>Agrega una lista activa de tu tablero de Trello</h5>
      <TagsInput state={lastState} setState={setState} />
      <Button variant="contained" color="primary" onClick={handlingForm}>
        Enviar formulario
      </Button>
    </form>
  );
}
