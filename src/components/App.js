
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
    const updatedList = tasklist.map((item,index) =>{
     index === editIndex ? task : item;
    })
    setTasklist(updatedList)
    editIndex(null)
    setTask("")
  }

  const handleDelete = (index) => {
    const filteredItem = tasklist.filter((item,i) => {
      if(index !== i){
        return item;
      }
    })
    setTasklist(filteredItem)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To Do List</h1>
        <div>
          <input onChange={(e) => setTask(e.target.value)} value={task} type="text" />
          <button onClick={handleTask}>Add</button>
        </div>
        <ul>
          {
            tasklist.map((item,index) => {
              return <li key={index}>
               {
                editIndex === index ? 
                <>
                <input onChange={(e) => e.target.value} value={task} type="text"/>
                <button onClick={handleSave}>Save</button>
                </> :
                <>
                {item}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
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
