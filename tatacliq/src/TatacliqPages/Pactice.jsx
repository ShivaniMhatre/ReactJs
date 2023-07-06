import React, { useState } from 'react'
import './../../src/cssfile/Practice.css'
const Pactice = () => {
  const[Mens,setMens]=useState[false];

  const Mens_Div=()=>{
    setMens(!Mens);
  };

  return (
    <div id="mens" onClick={Mens_Div} className={Mens? 'mens_active':'mens_inactive'}>
        bv
    </div>
  )
}

export default Pactice