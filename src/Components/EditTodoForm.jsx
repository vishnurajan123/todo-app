import React, { useState } from 'react'

function EditTodoForm({editTodo,task}) {
    const [value,setValue]=useState(task.task)
    const handleSubmit=(e)=>{
        e.preventDefault()
        editTodo(value, task.id)
        setValue("")

    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
        <div className='d-flex pe-5 ps-5 pb-3'>
            <input className='form-control ' value={value} type="text" placeholder='Update task' onChange={(e)=>setValue(e.target.value)}/>
            <button  type='submit' className='btn btn-dark'>Save</button>
        </div>
    </form>
    </>
  )
}

export default EditTodoForm