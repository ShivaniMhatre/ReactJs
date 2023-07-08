import React, { useCallback, useState } from 'react'
import Listtodo from './Listtodo'

const Callback = () => {
    const[todos,setTodos]=useState(["EAT","Assignment"])
    const[counter,setCounter]=useState(0)

    // function addtodo(){
    //     setTodos([...todos,"Repeat"])
    // }
    const addtodo = useCallback(()=>{
        setTodos([...todos,"Repeat"])
    },[todos])

    function add(){
        setCounter((preVal)=>preVal+1)
    }
  return (
    <div>
        <Listtodo todos={todos} addtodo={addtodo}/>
        <h1>Counter:{counter}</h1>
        <button onClick={add} style={{'width':'20%'}}>+</button>
    </div>
  )
}

export default Callback