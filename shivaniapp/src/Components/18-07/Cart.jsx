import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './../../../src/Components/18-07/cart.css'



const Cart = () => {
    const [usercart, setUserCart] = useState([]);
    const [finalprice, setFinalPrice] = useState(0);
    const router = useNavigate();

    useEffect(() => {
        if (usercart.length) {
            var totalprice = 0;
            for (var i = 0; i < usercart.length; i++) {
                totalprice += usercart[i].price;
            }
            setFinalPrice(totalprice)
        }
    }, [usercart])
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

//     const removeItem = ({ id }) => {
//         // // setUserCart(usercart.filter((pro) => pro.id !== id))
//         // setUserCart(usercart.filter((pro) => pro.id !== id))
// }
const removeItem=()=>{
        const user = JSON.parse(localStorage.getItem("Current-users"));
        if(user?.email){
            const allUsers=JSON.parse(localStorage.getItem("Users"));
            for(var i=0;i<allUsers.length;i++){
                if(allUsers[i].cart.id==user[i].cart.id){
                    // setUserCart(splice(allUsers[i]))
                    allUsers.cart.splice(allUsers[i])
                }
            }
        }
    };

    

    function buyProducts() {
        const user = JSON.parse(localStorage.getItem("Current-user"));
        if (user?.email) {
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == user.email && allUsers[i].password == user.password) {
                    allUsers[i].cart = [];
                    break;
                }
            }
            localStorage.setItem("Users", JSON.stringify(allUsers))
        }
        setFinalPrice(0)
        setUserCart([]);
        alert("Product will deliver soon, Thank you for shopping.")
    }



    return (
        <div id='cart_body'>
            <h1>Cart</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
                            <div id='rem_btn'>
                                <button onClick={() => removeItem(pro)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='cart_billing'>
                    <div style={{ width: '90%', borderBottom: '1px solid green', margin: 'auto' }}>
                        <div className="billing_detail">
                            <p>Cart Total: </p>
                            <p>Rs. {finalprice + finalprice}</p>
                        </div>
                        <div className="billing_detail">
                            <p>Processing Fee: </p>
                            <p style={{ color: 'green' }}>FREE</p>
                        </div>
                        <div className="billing_detail">
                            <p>Cart Subtotal(After 50% dis): </p>
                            <p>Rs. {finalprice}</p>
                        </div>
                    </div>
                    <div id='btn'>
                        <div style={{ width: '30%', height: '50%', textAlign: 'center' }}>
                            <p >Total : Rs. {finalprice}</p>
                        </div>
                        <div style={{ width: '40%', height: '70%' }}>
                            <button onClick={buyProducts}>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart