import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [todos, setTodos] = useState(["Eat Lunch", "Do Assignment"]);
    const [counter, setCounter] = useState(0);

    // const Number = expensiveCalculation(counter)

    const Number=useMemo(()=>{return expensiveCalculation(counter)},[counter])
    function addtodo() {
        setTodos([...todos, "New Todo"])
    }

    return (
        <div>
            <h1>Expensive Calculation :{Number}</h1>
            <h1>Count : {counter}</h1>
            <button  style={{'width':'20%','backgroundColor':'skyblue','color':'white','border':'none'}} onClick={() => setCounter((preval) => preval + 1)}>+</button>
            <h1>Todos : </h1>
            {todos.map((todo, i) => (
                <h3 key={i}>{todo}</h3>
            ))}
            <button style={{'width':'20%','height':'30px','backgroundColor':'greenyellow','color':'white','border':'none'}} onClick={addtodo}>Add todo</button>
        </div>
    )
}

const expensiveCalculation = (number) => {
    console.log("Inside Expensive Calculation....")
    for (var i = 0; i < 100000000; i++) {
        number = number + 1;
    }
    return number;
}

export default UseMemo