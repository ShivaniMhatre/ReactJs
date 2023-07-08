import React, { memo } from 'react'

const Listtodo = ({todos,addtodo}) => {
    console.log("Inside Todo Component")
  return (
    <div>
        <h1>Todo Here</h1>
        {todos.map((todo)=>(
            <p>{todo}</p>
        ))}
        <button onClick={addtodo}>Add Todo</button>
    </div>
  )
}

export default memo(Listtodo)