import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './../../../src/Components/18-07/cart.css'



const Cart = () => {
    const [usercart, setUserCart] = useState([]);
    const router = useNavigate();

    console.log(usercart, "-usercart");
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allusers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allusers.length; i++) {
                if (allusers[i].email == user.email && allusers[i].password == user.password) {
                    setUserCart(allusers[i].cart)
                    break;
                }
            }
        } else {
            alert("Please Login To Watch all Cart Product!!!!");
            router('/login');
        }
    }, [])

    const removeItem = (id) => {
        const updatedItem = usercart.filter((pro) => {
            return id != pro.id
        });
        setUserCart(updatedItem)
    }

    return (
        <div id='cart_body'>
            <h1>Cart</h1>
            <div id='cart'>
                {usercart.length && usercart.map((pro) => (
                    <div className='cart_pro' key={pro.id}>
                        <div className='cart_img'>
                            <img src={pro.image} />
                        </div>
                        <div className='cart_text'>
                            <h3>{pro.title}</h3>
                            <p>RS.{pro.price}</p>
                        </div>
                        <div>
                            <button onClick={() => removeItem(pro.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart