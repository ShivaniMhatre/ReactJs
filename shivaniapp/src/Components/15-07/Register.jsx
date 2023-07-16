import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import './../../../src/Components/15-07/Register.css'

const Register = () => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' })
    const redirect = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || []
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart: []
            };
            console.log(array,"-array")
            array.push(userDataObj);
            console.log(array,"array after push")
            localStorage.setItem("Users", JSON.stringify(array));
            alert("Registration Successfull...")
            redirect('/login')
        }
        else {
            alert("Fill Your Data....")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div id='register'>
                    <h1>Register</h1>
                    <div className='Input'>
                        <label>Name : </label><br />
                        <input type='text' name='name' onChange={handleChange} /><br />
                    </div>
                    <div className='Input'>
                        <label>Email : </label><br />
                        <input type='email' name='email' onChange={handleChange} /><br />
                    </div>
                    <div className='Input'>
                        <label>Password : </label><br />
                        <input type='password' name='password' onChange={handleChange} /><br />
                    </div>
                    <div id='btn'>
                        <input type='submit' value='Register' />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Register
