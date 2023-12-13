import React, { useState } from 'react'
import addItem from './AddItem.module.css'

const AddItem = ({AddTask}) => {
    const [value, setValue] = useState('')
    const [value2, setValue2] = useState('')
   
    const addtask =()=>{
        AddTask(value,value2)
        setValue('')
        setValue2('')
    }

  return (
    <>
      <div className={addItem.con1}>
        <input type="text" placeholder='Title'className={addItem.input1} value={value} onChange={(e)=>setValue(e.target.value)}/>
        <input type="text" placeholder='Description' className={addItem.input1}  value={value2} onChange={(e)=>setValue2(e.target.value)}/>
        <button className={addItem.btn} onClick={addtask}>ADD TASK</button>
      </div>
    </>
  )
}

export default AddItem