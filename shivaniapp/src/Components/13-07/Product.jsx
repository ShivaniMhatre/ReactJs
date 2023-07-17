import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './../../../src/Components/13-07/Product.css'

const Product = () => {
    const [isUserLoggedin, setUserLoggedin] = useState(false);
    const [CurrentUserEmail, setCurrentUserEmail] = useState("");
    const [products, setProducts] = useState([]);
    const [singleproduct, setSingleProduct] = useState({});
    const { id } = useParams();
    const router = useNavigate();

    // console.log(products, "-products")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    useEffect(() => {
        if (id && products.length) {
            const res = products.find((product) => product.id == id)
            setSingleProduct(res)
        }
    }, [id, products])

    useEffect(() => {
        var user = JSON.parse(localStorage.getItem("Current-user"));
        // console.log(user, "-user")
        if (user) {
            setUserLoggedin(true);
            setCurrentUserEmail(user.email)
        }
    }, [])

    // console.log(singleproduct, "-singleproduct")


    
    function addCart() {
        if (isUserLoggedin) {
            const users = JSON.parse(localStorage.getItem("Users"));

            for (var i = 0; i < users.length; i++) {
                if (users[i].email == CurrentUserEmail) {
                    users[i].cart.push(singleproduct);
                    // console.log(singleproduct,"-cart")
                    localStorage.setItem("Users", JSON.stringify(users));
                    break;
                }
            }
        } else {
            alert("You cant add product before login...")
        }

    }

    function logout() {
        localStorage.removeItem("Current-user");
        setUserLoggedin(false);
        alert("Logout Successfull.")
        router('/login')
    }

    return (
        <div>
            <div id='outter'>
                <div id="inner_left">
                    <img src={singleproduct.image} />
                </div>
                <div id='inner_right'>
                    <h2>{singleproduct.title}</h2>
                    <p>{singleproduct.description}</p>
                    <h5>MRP : {singleproduct.price}Rs</h5>
                    <div id='btn'>
                        <button onClick={addCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div id='out_btn'>
                <button onClick={logout}>Logout</button>
            </div>
        </div>


    )
}

export default Product