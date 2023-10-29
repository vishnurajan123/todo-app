import React, { useState } from 'react'

function TodoForm({addTodo}) {
    const [value,setValue]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue("")

    }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
       <p className='p-lg-5'>
            <div className='d-flex p-5 shadow rounded' >
                <input className='form-control' value={value} type="text" placeholder='Enter a task ...' onChange={(e)=>setValue(e.target.value)}/>
                <button type='submit' className='btn btn-dark'>Add</button>
            </div>
       </p>
    </form>
    </>
  )
}

export default TodoForm