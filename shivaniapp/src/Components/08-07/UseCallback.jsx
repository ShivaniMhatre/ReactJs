import React, { useState } from 'react'
import Todo from './Todo'

const UseCallback = () => {
    const [todos, setTodos] = useState(["Eat", "Assignment"])
    const [counter, setCounter] = useState(0)

    function addtodo(){
        setTodos([...todos,"come to class"])
    }
    function add(){
        setCounter((preValue) => preValue + 1)
    }
    return (
        <div>
            <Todo todos={todos} addtodo={addtodo}/>
            <h1>Counter : {counter}</h1>
            <button onClick={add}>+</button>
        </div>
    )
}

export default UseCallback