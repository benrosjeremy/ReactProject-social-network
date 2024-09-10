import React, { useContext } from "react";
import { taskListContext } from "./TaskDisplay";

function TaskSortControl() {
  const { taskList, setTaskList, allTaskList } = useContext(taskListContext);

  const sortByAlphaAscending = () => {
    const sortArr = [...taskList].sort((a, b) =>
      a["title"].localeCompare(b["title"])
    );
    setTaskList(sortArr);
  };
  const sortByAlphaDescending = () => {
    const sortArr = [...taskList].sort((a, b) =>
      b["title"].localeCompare(a["title"])
    );
    setTaskList(sortArr);
  };
  const ChangeDirection = () => {
    setTaskList([...taskList].reverse());
  };
  const SortByBoolean = () => {
    const sortArr = [...taskList].sort(
      (a, b) => a["completed"] - b["completed"]
    );
    setTaskList(sortArr);
  };
  const handleChange = (event) => {
    switch (event.target.value) {
      case "changeDirection":
        ChangeDirection();
        break;
      case "sortByAlphaAscending":
        sortByAlphaAscending();
        break;
      case "sortByAlphaDescending":
        sortByAlphaDescending();
        break;
      case "sortByBoolean":
        SortByBoolean();
        break;
    }
  };
  return (
    <div class="control-group">
      <label for="sort-select">מיון לפי:</label>
      <select onChange={handleChange}>
        <option value="changeDirection">מלמטה ללמעלה /מלמעלה ללמטה</option>
        <option value="sortByAlphaAscending">אלפביתי עולה</option>
        <option value="sortByAlphaDescending">אלפביתי יורד</option>
        <option value="sortByBoolean">ביצוע</option>
      </select>{" "}
    </div>
  );
}

export default TaskSortControl;
