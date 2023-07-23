import React, { useContext, useEffect, useState } from 'react'
import '../15-07/Register.css'
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { login } = useContext(AuthContext)

    const [userData, setUserData] = useState({});

    const route = useNavigate()


    console.log(userData, "userData")

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        if (!currentUser) {
            route("/login")
        }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Current-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        login(currentUser)
        localStorage.setItem("Current-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile updated.")
        route('/')
    }
    return (
        <div style={{ margin: '10vh' }}>
            <form onSubmit={handleSubmit}>
                <div id='register'>
                    <h1>Update Profile</h1>
                    <div className='Input'>
                        <label>Change Name : </label><br />
                        <input type='text' name='name' onChange={handleChange} /><br />
                    </div>
                    {/* <div className='Input'>
                        <label>Email : </label><br />
                        <input type='email' name='email' onChange={handleChange} /><br />
                    </div> */}
                    <div className='Input'>
                        <label>Change Password : </label><br />
                        <input type='password' name='password' onChange={handleChange} /><br />
                    </div>
                    <div id='btn'>
                        <input type='submit' value='Update' />
                    </div>
                    {/* <div id='text' onClick={() => route('/login')}>
                        <span><u>Already have an Account</u></span>
                    </div> */}
                </div>
            </form>
        </div>
    )
}

export default Profile