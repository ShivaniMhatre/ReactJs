import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  './../../../src/data/practice.json'

const Practice_Multiple = () => {
    const [product,setProduct]=useState([]);
    // const route=useNavigate()

    useEffect(() => {
        fetch('practice.json')
            // .then(res => res.json())
            .then(json => setProduct(json))
    }, [])
  return (
    <div>
        {product.map((pro)=>(
            <h1>{pro.id}</h1>
        ))}
        
    </div>
  )
}

export default Practice_Multiple