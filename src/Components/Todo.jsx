import React from 'react'

function Todo({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div>

       <div className='d-flex justify-content-between pe-5 ps-5 pt-2 pb-3 '>
            <p style={{width:"83%",fontWeight:"700",cursor:"pointer"}}  onClick={()=>toggleComplete(task.id)} className={`${task.completed?'completed ':""}`} >{task.task}</p>
            <div>
                <button className='btn text-primary pt-1' onClick={()=>editTodo(task.id)} ><i style={{fontSize:"1.5rem"}} class="fa-solid fa-pen"></i></button>
                <button className='btn text-danger pt-1' onClick={()=>deleteTodo(task.id)} ><i style={{fontSize:"1.5rem"}} class="fa-solid fa-trash"></i></button>
            </div>
       </div>
    </div>
  )
}

export default Todo