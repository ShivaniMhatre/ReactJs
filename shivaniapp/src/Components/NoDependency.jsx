import { useEffect, useState } from "react";

function NoDependency(){
    const[count,setCount]=useState(0);
    const[shiva,setShiva]=useState("katkar");
    useEffect(()=>{
        //console.log("Inside Type1")
        alert("WelCome!!!")
    });
    function add(){
        setCount((preVal)=>preVal+1)
    }
    function change(){
        setShiva("Mhatre")
    }
    return(
        <div>
            <h1>Type1</h1>
            <h1>{count}</h1>
            <button onClick={add}>Change State</button>
            <h1>{shiva}</h1>
            <button onClick={change}>Change name</button>
        </div>
    )
}

export default NoDependency;