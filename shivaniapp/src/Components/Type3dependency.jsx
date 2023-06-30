import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Type3dependency(){
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(10);

    useEffect(()=>{
        console.log("Inside Effect")
    },[count])

    const route=useNavigate();
    return(
        <div>
            <h1>TYPE3</h1>
            <button onClick={()=>route('/login')}>Redirect To Login</button>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount((preVal)=>preVal+1)}>+1 for count</button>
            <h1>Count1: {count1}</h1>
            <button onClick={()=>setCount1((preVal)=>preVal+1)}>+1 for count</button>
        </div>
    )
}

export default Type3dependency;