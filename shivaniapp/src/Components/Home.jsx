import { useContext, useEffect, useState } from 'react';
import '../App.css'
import './../../../shivaniapp/src/Components/Home.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

function Home() {
    const { state, login, logout } = useContext(AuthContext);
    // console.log(state, "State from context in home file")

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {

        if (state?.user?.email) {
            setIsUserLoggedIn(true);
        }
        else {
            setIsUserLoggedIn(false)
        }
    }, [state])


    return (
        <div id="home_body">
            <h1>Welcome</h1>
            <div id='home_img'>
                <img src="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg" />
            </div>
            <div id='home_btn'>
                {isUserLoggedIn ? <button onClick={() => logout()}>Logout</button> : <button onClick={() => router('/login')}>Login</button>}
            </div>
        </div>
    )
}

export default Home;