import { useEffect, useState } from "react";
import './../Components/practice/Practice.css'
import './Navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState({});
    const[userName,setUserName]=useState([]);

    const router = useNavigate()

    useEffect(() => {
        const isUserPresent = JSON.parse(localStorage.getItem("Current-user"));
        if (isUserPresent) {
            setUser(isUserPresent)
        }
    });
    

    function logout() {
        localStorage.removeItem("Current-user")
        setUser({});
        router('/');
    }

    return (
        <div id='navbar'>
            <div id='nav_logo'>
                <h1>Awdiz</h1>
            </div>
            <div id='nav_pro'>
                {user?.email ?
                    <>
                        <h3>Profile</h3>
                        <h3 style={{ marginLeft: '20px' }} onClick={() => router('/product-from-backend')}>Product</h3>
                        <h3 style={{ marginLeft: '20px' }} onClick={() => router('/cart')}>Cart</h3>
                       
                        <h3 style={{ marginLeft: '20px' }} onClick={logout}>Logout</h3>

                    </>
                    :
                    <h3 onClick={() => router('/login')}>Login</h3>
                }
                

            </div>
        </div>
    )
}

export default Navbar;