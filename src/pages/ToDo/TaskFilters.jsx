import React, { useContext, useRef } from 'react'
import { taskListContext } from './TaskDisplay';

function TaskFilters() {

    const { taskList, setTaskList, allTaskList } = useContext(taskListContext);

    const selectElement = useRef()
    const inputElement = useRef()

 const filterByNumber = ()=>{
    const newFilterList = allTaskList.filter(tObj=>tObj.id>=inputElement.current.value)
    setTaskList(newFilterList)
 }
 const filterByTitle = ()=>{
    const newFilterList = allTaskList.filter(tObj=>tObj.title.startsWith(inputElement.current.value))
    setTaskList([...newFilterList])
 }

 const filterCompleted = ()=>{
    const newFilterList = allTaskList.filter(tObj=>tObj.completed === true)
    setTaskList(newFilterList)
 }

 const filterNotCompleted = ()=>{
    const newFilterList = allTaskList.filter(tObj=>tObj.completed === false)
    setTaskList(newFilterList)
 }

    const handleFilters = ()=>{
        const selectValue = selectElement.current.value
        switch(selectElement.current.value){
            case "number":
            filterByNumber()
            break
            case "title":
                filterByTitle()
                break
            case "statusCompleted":
                filterCompleted()
                break
            case "statusNotCompleted":
                filterNotCompleted()
                break
        }
    }
  return (
    <div class="control-group">
    <input ref={inputElement} type="text" id="search-input" placeholder="חיפוש..."/>
    <select ref={selectElement} id="search-type">
        <option value="number"> החל מ מספר סידורי</option>
        <option value="title">כותרת</option>
        <option value="statusCompleted">הושלם</option>
        <option value="statusNotCompleted">לא הושלם</option>
    </select>
    <button id="search-button" onClick={handleFilters}>חפש</button>
</div>
)
}

export default TaskFilters