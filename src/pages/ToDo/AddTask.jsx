import React, { useContext, useRef } from "react";
import { taskListContext } from "./TaskDisplay";

function AddTask({userId}) {

    const { taskList, setTaskList, allTaskList, setAllTaskList } = useContext(taskListContext);
    const inputElement = useRef()

  const addTask = async (e) => {
    if (/\S/.test(inputElement.current.value)) {
      // const nweId =
      // allTaskList.length >= 1
      //     ? (parseInt(allTaskList[allTaskList.length - 1].id) + 1).toString()
      //     : 1;
      const newTask = {
        userId: userId,
        // id: nweId,
        title: inputElement.current.value,
        completed: false,
      };

        try {
          const response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
          });
    
          if (response.ok) {
            const createdTodo = await response.json();
            console.log('Todo added:', createdTodo);
          } else {
            console.error('Failed to add Todo');
          }
        } catch (error) {
          console.error('Error:', error);
        }
        inputElement.current.value = "";
        setAllTaskList([...allTaskList])

      // allTaskList.push(newTask);
      // setTaskList([...allTaskList]);
    }
  };

  return (
    <div id="add-todo-group" class="control-group">
      <input ref={inputElement} type="text" id="new-todo" className="input-task" placeholder="הוסף מטלה חדשה" />
      <button id="add-todo" className="button-task" onClick={addTask}>
        הוסף
      </button>
    </div>
  );
}

export default AddTask;
