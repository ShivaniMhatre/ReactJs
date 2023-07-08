import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormSingleState = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })

    const route = useNavigate();

    // console.log(userData, "-userData")
    function handleChange(event) {
        // console.log(event.target.value,"-value");
        // console.log(event.target.name,"-name");
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!userData.name) return alert("Name Is Required!!!")
        if (!userData.email) return alert("Email Is Required!!")
        if (!userData.password) return alert("Password Is Required!!")
        if (userData.password.length < 7) return alert("Password Must Be Greater than 8 Or More Digits")

        setUserData({ name: "", email: "", password: "" })
        alert("Register!!!!");
        route('/');
    }
    return (
        <div style={{ "display": "flex", "justifyContent": "center" }}>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Email : </label>
                <input type="email" value={userData.email} name="email" onChange={handleChange} /><br />
                <label>Password : </label>
                <input type="password" value={userData.password} name="password" onChange={handleChange} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default FormSingleState