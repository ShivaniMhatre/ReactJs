import { useEffect, useState } from "react"

function EmptyDependency(){
    const[count,setCount]=useState(0);
    function add(){
        setCount((preVal)=>preVal+1);
    }
    useEffect(()=>
    {
        //console.log("Inside Type2")
    alert("Welcome!!!!")},[])
    return(
        <div>
            <h1>Type2</h1>
            <h2>{count}</h2>
            <button onClick={add}>Change data</button>
        </div>
    )
}

export default EmptyDependency