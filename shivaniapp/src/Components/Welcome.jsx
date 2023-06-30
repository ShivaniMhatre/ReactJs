import { useState } from "react";


function Welcome(){
    const [counter,setCounter]=useState(12344)
    console.log(counter,"-Counter")
    return(
        <div>
            <h4>Welcome</h4>
            <button onClick={()=>setCounter(true)}>Change Data</button>
        </div>
    )
}

export default Welcome;