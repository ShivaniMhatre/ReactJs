import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from './../../../src/data/practice.json'

const Practice_Single = () => {
  const param = useParams();
  const [product, setProduct] = useState(data);
  // console.log(product);
  // console.log(param.id);
  // console.log(param);
  const res = product.find((pro) => {
    return pro.id === param.id
  })

  console.log(res);
  return (
    <div style={{margin:'20vh'}}>
      {/* {res.map((p)=>{
        return <h1>{p.detail}</h1>
      })
      } */}
      {/* {res.map((p)=>(
        <h1>{p.detail}</h1>
      ))} */}
      {<h1>{res.detail}</h1>}
    </div>
  )
}

export default Practice_Single