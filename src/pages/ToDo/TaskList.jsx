import React, { useContext } from "react";
import { taskListContext } from "./TaskDisplay";
import Task2 from "./Task2";

function TaskList() {
  const { taskList } = useContext(taskListContext);

  return (
    <ul id="todo-list">
      {(taskList.reverse()).map((taskObj, index) => {
        return <Task2 taskObj={taskObj} index={index} />;
      })}
    </ul>
  );
}

export default TaskList;

