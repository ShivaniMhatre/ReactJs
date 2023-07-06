import React, { useState } from 'react'

const Formone = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");

    console.log(name, "-name")
    console.log(email, "-email")
    console.log(password, "-password")

    function toSetName(event) {
        // console.log(event.target.value)
        setName(event.target.value)
    }
    function toSetEmail(event) {
        // console.log(event.target.value)
        setEmail(event.target.value)
    }
    function toSetPassword(event) {
        // console.log(event.target.value)
        SetPassword(event.target.value)
    }
    function submitdata(event) {
        event.preventDefault();


        if (!name && !email && !password) {
            return alert("Fill Your's Data")
        }
        if (!name) {
            return alert("Name Is REQUIRED!!!!")
        }
        if (name.length < 5) {
            return alert("Name Must Be Greater Than 4 Digit")
        }
        if (!email) {
            return alert("Email Is REQUIRED!!!!")
        }
        if (!password) {
            return alert("Password Is REQUIRED!!!!")
        }
        if (password.length < 8) {
            return alert("Password Must Be Greater Than 7 Digit")
        }
        return alert("Form Register Successfully!!")
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form onSubmit={submitdata}>
                <label>Name : </label><br />
                <input onChange={toSetName} type="text" /><br />
                <label>Email : </label><br />
                <input onChange={toSetEmail} type="email" /><br />
                <label>Password : </label><br />
                <input onChange={toSetPassword} type="password" /><br />
                <input type="submit" value='Register' />

            </form>
        </div>
    )
}

export default Formone