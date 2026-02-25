
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tasklist,setTasklist] = useState([])
  const [task,setTask] = useState("")

  const handleTask = () => {
    setTask("")
    setTasklist(() => [...tasklist,task])
  }

  const handleEdit = (index) => {
    
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
              return <li>
                {item} 
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            })
          }
        </ul>

    </div>
  )
}

export default App
