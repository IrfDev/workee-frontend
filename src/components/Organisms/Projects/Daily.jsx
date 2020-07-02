import React from "react";
import TaskCard from "../../Atoms/TaskCard.jsx";

export default function Daily(props) {
  return (
    <>
      <h1>Tasks</h1>
      {props.tasks.map((task) => (
        <TaskCard key={Math.random()} task={task} />
      ))}
    </>
  );
}
