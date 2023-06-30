import { useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    console.log(count)
    function add() {
        setCount((preValue) => preValue + 1)
    }
    function sub() {
        setCount((preValue) => preValue - 1)
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={add}>+ Add By One(1)</button>
            <button onClick={sub}>- Add By One(1)</button>
        </div>
    )
}

export default Count;