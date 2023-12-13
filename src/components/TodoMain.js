import React, { useState } from 'react'
import AddItem from './AddItem'
import ListItem from './ListItem'

const TodoMain = () => {
    const[tasks,setTasks]=useState([])

    const AddTask = (title,description)=>{
        const newItem = [...tasks,{title,description}]
        setTasks(newItem)
    }

    const removeTask =(index)=>{
      const newTask =[...tasks]
      newTask.splice(index,1)
      setTasks(newTask)
  }
  return (
    <>
    <AddItem AddTask={AddTask}/>
  
      <ListItem tasks={tasks} removeTask={removeTask}/>

    </>
  )
}

export default TodoMain