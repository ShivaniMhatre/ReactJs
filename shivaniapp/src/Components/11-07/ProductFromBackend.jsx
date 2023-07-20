import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../../src/Components/11-07/ProductFromBAckend.css'


const ProductFromBackend = () => {

    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    const redirect = (id) => {
        router(`/product/${id}`)
    }
    return (
        <div style={{margin:"15vh"}}>
            <h1>Products : </h1>
            {products.length ? <div id='pro_backend'>
                {products.map((pro) => (
                    <div className='pro_backend' onClick={() => redirect(pro.id)}>
                        <img src={pro.image} />
                        <h4>Name : {pro.title}</h4>
                        <h3> Price : {pro.price}</h3>
                    </div>
                ))}
            </div>
                :
                <h1 style={{ width: '10%', margin: 'auto' }}>Loading......</h1>}
        </div>



    )
}

export default ProductFromBackend