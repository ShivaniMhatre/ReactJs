import React, { memo } from 'react'

const Todo = (todos,addtodo) => {
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

export default memo(Todo)