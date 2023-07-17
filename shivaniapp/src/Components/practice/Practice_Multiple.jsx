import React, { useEffect, useState } from 'react'
import  mydata from './../../../src/data/practice.json'
import { useNavigate } from 'react-router-dom'


const Practice_Multiple = () => {
  const route=useNavigate();

    const redirect=(id)=>{
      route( `/ps/${id}`)
    }
  return (
    <div style={{display:'flex'}}>
        {mydata.map((pro)=>(
          <div onClick={() => route(pro.id)}>           
             <h1>{pro.id}</h1>
             <img src={pro.image} style={{width:'30%',height:'50vh'}}/>
             <h3>{pro.detail}</h3>
          </div>
        ))}
    </div>
  )
}

export default Practice_Multiple