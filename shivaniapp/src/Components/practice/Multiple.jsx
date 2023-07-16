import React from 'react'
import data from './../../data/practice.json'
import './../practice/Practice.css'
import { useNavigate } from 'react-router-dom'

const Multiple = () => {
    const router = useNavigate()

    const redirect = (id) => {
        router(`/ps/${id}`)
    }
    return (

        <div className='multiple'>
            {data.map((pro) => (
                <div className='product' key="pro.id" onClick={() => redirect(pro.id)}>
                    <div className='pro_img'>

                    </div>
                    <h2>{pro.detail}</h2>
                    <p>Price:{pro.Price}</p>
                    <p>{pro.quntity}</p>
                    <div className='rate'>
                        <span>{pro.rate}</span>
                        <p>@</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Multiple