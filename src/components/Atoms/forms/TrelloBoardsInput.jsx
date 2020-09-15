import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useQuery } from "@apollo/react-hooks";
import { CircularProgress } from "@material-ui/core";

import gql from "graphql-tag";

export default function TrelloBoardsInput({
  handler,
  formState,
  setBasicInfoProject,
}) {
  const GET_TRELLO_BOARDS = gql`
    query {
      getTrelloBoards {
        id
        name
      }
    }
  `;
  const GET_TRELLO_LISTS = gql`
    query GetTrelloLists($boardId: ID!) {
      getTrelloListsFromBoard(boardId: $boardId) {
        name
        id
      }
    }
  `;

  const trelloBoards = useQuery(GET_TRELLO_BOARDS);
  const trelloLists = useQuery(GET_TRELLO_LISTS, {
    variables: { boardId: formState.board },
  });
  return trelloBoards.loading ? (
    <CircularProgress />
  ) : (
    <div>
      <h4>Selecciona un tablero de Trello y una lista activa</h4>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="trello-board-input">Tablero</InputLabel>
        <Select
          labelId="trello-board-input"
          id="trello-board-inputs"
          autoWidth={true}
          onChange={(e) =>
            handler("board", e, {
              setBasicInfoProject,
              basicProjectInfo: formState,
            })
          }
        >
          {trelloBoards.data.getTrelloBoards.map((board) => (
            <MenuItem key={board.id} value={board.id}>
              {board.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="trello-list-input">Lista</InputLabel>
        <Select
          labelId="trello-list-input"
          id="trello-list-inputs"
          autoWidth={true}
          onChange={(e) =>
            handler("activeList", e, {
              setBasicInfoProject,
              basicProjectInfo: formState,
            })
          }
        >
          {trelloLists.data ? (
            trelloLists.data.getTrelloListsFromBoard.map((board) => (
              <MenuItem key={board.id} value={board.id}>
                {board.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem selected={true}>Pick a board</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}
