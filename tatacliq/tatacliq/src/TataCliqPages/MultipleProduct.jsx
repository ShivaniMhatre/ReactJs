import React from 'react'
import data from './../../src/data/Multiple_product.json'
import './../CSSfile/MultipleProduct.css'
import { useNavigate } from 'react-router-dom'
const MultipleProduct = () => {
    const router=useNavigate()
    return (
        <div className='men_multiple'>
            {data.map((pro) => (
                <div className='M_product' key="pro.id" onClick={()=>router('/men_SingleProduct')}> 
                    <div className='Mpro_img'>
                        <img src={pro.image} />
                    </div>
                    <div style={{'paddingLeft':'5px'}}>
                        <h5>{pro.name}</h5>
                        <p style={{ 'fontSize': '12px' }}>{pro.detail}</p>

                        <span style={{ 'fontSize': '12px', 'fontWeight': '500','paddingRight':'10px' }}>{pro.dis_price}</span><span style={{ 'fontSize': '12px' }}>{pro.price}</span>
                        <div className='Mrate'>
                            <span style={{ 'fontSize': '10px', 'paddingLeft': '5px' }}>{pro.rate}</span>
                            <i class="fa-solid fa-star fa-2xs" style={{ 'paddingTop': '6px', 'paddingLeft': '5px', 'color': 'rgb(73,155,31)' }}></i>
                        </div>
                        <p style={{ 'fontSize': '12px' ,'color':'rgb(221,89,61)'}}>{pro.stock}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MultipleProduct