import React, { useContext, useEffect, useState } from "react";
import { taskListContext } from "./TaskDisplay";

function Task2(props) {
  const [completed, setCompleted] = useState(props.taskObj.completed);

  const { taskList, setTaskList } = useContext(taskListContext);

  useEffect(() => {
    setCompleted(props.taskObj.completed);
  }, [taskList]);

  const deleteTask = () => {
    setTaskList((list) => {
      list.splice(props.index, 1);
      return [...list];
    });
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onClick={(e) => {
          props.taskObj.completed = !completed;
          setCompleted(!completed);
        }}
      />
      <span className="item-number">{props.index + 1}</span>
      <span className={completed && "completed"}>{props.taskObj.title}</span>
      <button className="delete-btn" onClick={deleteTask}>
        מחק
      </button>
    </li>
  );
}

export default Task2;

// function addTask(title, completed = false) {
//   taskCount++;
//   const li = document.createElement("li");
//   li.className = "todo-item";
//   li.innerHTML = `
//         <input type="checkbox" ${completed ? "checked" : ""}>
//         <span class="item-number">${taskCount}</span>
//         <span>${title}</span>
//         <button class="delete-btn">מחק</button>
//     `;
//   todoList.appendChild(li);
//   updateTaskCount();

//   // הוספת אירוע למחיקת המשימה
//   li.querySelector(".delete-btn").addEventListener("click", function () {
//     li.remove();
//     taskCount--;
//     updateTaskCount();
//   });
// }
