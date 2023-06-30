import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MultipleDependency() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);
    const [count2, setCount2] = useState(20);

    useEffect(() => {
        console.log("Inside Effect")
        if(count==9){
            route('/')
        }
    }, [count, count2])

    const route = useNavigate()
    return (
        <div>
            <h1>TYPE4</h1>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((preVal) => preVal + 1)}>+1 for count</button>
            <h1>Count1: {count1}</h1>
            <button onClick={() => setCount1((preVal) => preVal + 1)}>+1 for count</button>
            <h1>Count2: {count2}</h1>
            <button onClick={() => setCount2((preVal) => preVal + 1)}>+1 for count</button>
        </div>
    )
}

export default MultipleDependency;