
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tasklist,setTasklist] = useState([])
  const [task,setTask] = useState("")
  const [editIndex,SetEditIndex] = useState(null)

  const handleTask = () => {
    if(task.trim() === "")return;
    setTasklist(() => [...tasklist,task])
    setTask("")
  }

  const handleEdit = (index) => {
    SetEditIndex(index)
    setTask(tasklist[index])
  }

  const handleSave = () => {
    const updatedList = tasklist.map((item,index) => index === editIndex ? task : item)
    setTasklist(updatedList)
    SetEditIndex(null)
    setTask("")
  }

  const handleDelete = (index) => {
    const filteredItem = tasklist.filter((item,i) => i !== index)
    setTasklist(filteredItem)
  }
  return (
    <div className="tasks_section">
        {/* Do not remove the main div */}
        <h1>To Do List</h1>
        <div className="add_tasks_section">
          <input onChange={(e) => setTask(e.target.value)} value={task} type="text" />
          <button className="add_tasks_section" onClick={handleTask}>Add</button>
        </div>
        <ul>
          {
            tasklist.map((item,index) => {
              return <li className="task" key={index}>
               {
                editIndex === index ? 
                <>
                <input onChange={(e) => setTask(e.target.value)} value={task} type="text"/>
                <button className="save" onClick={handleSave}>Save</button>
                </> :
                <>
                {item}
                <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </>
               }
                </li>
            })
          }
        </ul>

    </div>
  )
}

export default App
