import React, { useState } from 'react'
import { Button } from 'bootstrap';

const AddTask = ({addTask}) => {
  const[value,setvalue]=useState("");

  const addItem =()=>{
    addTask(value)
    setvalue ("");
}
    return (
    <>
        <div className='input-container'>
            <input type="text" className='input' placeholder='Add a new Task' value={value}
            onChange={(e)=>{setvalue(e.target.value)}}
            />
            
                <button onClick={addItem} className='add-btn'>ADD</button>
                
        </div>
    </>
  )
}

export default AddTask
