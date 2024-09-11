import React, { useContext, useEffect, useState } from "react";
import { taskListContext } from "./TaskDisplay";

function Task2(props) {
  const [completed, setCompleted] = useState(props.taskObj.completed);

  const { taskList, setTaskList, allTaskList, setAllTaskList } =
    useContext(taskListContext);

  useEffect(() => {
    setCompleted(props.taskObj.completed);
  }, [taskList]);

  const deleteTask = () => {
    
      fetch(`http://localhost:3000/todos/${props.taskObj.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete the todo");
          }
          setAllTaskList([...allTaskList]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  };

  return (
    <li className="todo-item">
      <input
      className="input-task"
        type="checkbox"
        checked={completed}
        onClick={(e) => {
          props.taskObj.completed = !completed;
          setCompleted(!completed);
        }}
      />
      <span className="item-number">{props.index + 1}</span>
      <span className={completed && "completed"}>{props.taskObj.title}</span>
      <button className="delete-btn button-task" onClick={deleteTask}>
        מחק
      </button>
    </li>
  );
}

export default Task2;
