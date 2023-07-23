import { useContext, useEffect, useState } from "react";
import './../Components/practice/Practice.css'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/Authcontext";

const Navbar = () => {
    const { state, login, logout } = useContext(AuthContext);
    console.log(state, "State from context in navbar file");

    const [user, setUser] = useState({});
    const router = useNavigate()
    console.log(user.name,"-User")

    useEffect(() => {
        if (state?.user) {
            setUser(state?.user)
        }
        else {
            setUser({})
        }
    }, [state]);

    
    return (
        <div id='navbar'>
            <div id='nav_logo'>
                <h1>Awdiz</h1>
            </div>
            <div id='nav_pro'>
                {state?.user?.email ?
                    <>
                        <h3 onClick={()=>router('/profile')}>Profile</h3>
                        <h3 style={{ marginLeft: '20px' }}>Hello,<span style={{fontSize:'16px',color:'red'}}>{user.name}</span></h3>
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