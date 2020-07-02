import React from "react";
import BoardCard from "../../Molecules/BoardCard.jsx";

export default function Weekly(props) {
  console.log("Weekly props:", props);
  return (
    <>
      <h1>Weekly</h1>
      <div>
        {props.boards.map((board) => (
          <BoardCard key={Math.random()} board={board} />
        ))}
      </div>
    </>
  );
}
