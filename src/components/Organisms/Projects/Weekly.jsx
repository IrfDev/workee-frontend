import React from "react";
import BoardCard from "../../Molecules/HomeCards/BoardCard.jsx";

export default function Weekly(props) {
  return (
    <>
      <h1>Weekly</h1>
      <div>
        {props.boards.map((board) => (
          <BoardCard key={board.id} board={board} />
        ))}
      </div>
    </>
  );
}
