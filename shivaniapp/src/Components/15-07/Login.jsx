import React, { useState } from 'react'
import './../../../src/Components/15-07/Register.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const redirect = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const users = JSON.parse(localStorage.getItem('Users'));
      var flag = false;
      for (var i = 0; i < users.length; i++) {
        if (users[i].email == userData.email && users[i].password == userData.password)
          flag = true;
          // break;
      }
    }
    if (flag == false) {
      alert("Please Check Credentials.")
    }
    else {
      localStorage.setItem("Current-user", JSON.stringify(userData))
      alert("Login Successfull....");
      setUserData({email: '', password: ''})
      redirect('/product-from-backend')
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id='register'>
          <h1>Login</h1>

          <div className='Input'>
            <label>Email : </label><br />
            <input type='email' name='email' onChange={handleChange} /><br />
          </div>
          <div className='Input'>
            <label>Password : </label><br />
            <input type='password' name='password' onChange={handleChange} /><br />
          </div>
          <div id='btn'>
            <input type='submit' value='Login' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login