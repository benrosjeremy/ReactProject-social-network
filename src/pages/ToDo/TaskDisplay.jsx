import "./Task.css";
import React, { createContext, useContext, useEffect, useState } from "react";
import TaskSortControl from "./TaskSortControl";
import TaskFilters from "./TaskFilters";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export const taskListContext = createContext();


function TaskDisplay({userId}) {

  const [allTaskList, setAllTaskList] = useState([]); // מצב (State) לאחסון הנתונים מהשרת
  const [loading, setLoading] = useState(true); // מצב (State) להצגת טעינה
  const [error, setError] = useState(null); // מצב (State) לשמירת שגיאות
  const [taskList, setTaskList] = useState(allTaskList);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos?userId=${userId}`); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllTaskList(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchTodos(); 
  }, [allTaskList]); 

  useEffect(()=>{setTaskList([...allTaskList])},[allTaskList])

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }







  return (
    <taskListContext.Provider value={{ taskList, setTaskList, allTaskList ,setAllTaskList }}>
      <div className="task-container">
        <div id="controls">
          <TaskSortControl />
          <TaskFilters />
          <AddTask userId={userId} />
          <TaskList />
        </div>
      </div>
    </taskListContext.Provider>
  );
}

export default TaskDisplay;
