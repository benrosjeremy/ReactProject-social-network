import React, { useContext, useRef } from "react";
import { taskListContext } from "./TaskDisplay";

function TaskInput2({userId}) {

    const { taskList, setTaskList, allTaskList } = useContext(taskListContext);
    const inputElement = useRef()

  const addTask = (e) => {
    if (/\S/.test(inputElement.current.value)) {
      const nweId =
        taskList.length >= 1
          ? (parseInt(taskList[taskList.length - 1].id) + 1).toString()
          : 1;
      const newTask = {
        userId: userId,
        id: nweId,
        title: inputElement.current.value,
        completed: false,
      };
      allTaskList.push(newTask);
      setTaskList([...allTaskList]);
      inputElement.current.value = "";
    }
  };

  return (
    <div id="add-todo-group" class="control-group">
      <input ref={inputElement} type="text" id="new-todo" placeholder="הוסף מטלה חדשה" />
      <button id="add-todo" onClick={addTask}>
        הוסף
      </button>
    </div>
  );
}

export default TaskInput2;
