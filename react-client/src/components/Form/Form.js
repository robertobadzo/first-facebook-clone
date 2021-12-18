import React, { useState, useEffect } from 'react'
import "./Form.css"
import axios from 'axios';
import * as api from "../../api"

function Form() {
const [userData, setUserData] = useState({name: "", surname: "", email: "", password: ""})
const url = "http://localhost:5000/register"
const handleSubmit = async (e) => {
  alert("executing")
  e.preventDefault();
  await api.registerUser(userData)

}

  return (
    <div className='main'>
      <h1>facebook</h1>
      <form id="form" method='post' onSubmit={handleSubmit}>
        <div className='form'>
          <div className='message-wrapper'>
            <h2>Create a new account</h2>
            <h4>It's quick and easy.</h4>
          </div>
          <input name="name" type="text" placeholder='Name' onChange={(e) => setUserData({...userData, name: e.target.value})}></input>
          <input name='surname' type="text" placeholder='Surname' onChange={(e) => setUserData({...userData, surname: e.target.value})}></input>
          <input name="email" type="text" placeholder='E-mail' onChange={(e) => setUserData({...userData, email: e.target.value})}></input>
          <input name="password" type="password" placeholder='Password' onChange={(e) => setUserData({...userData, password: e.target.value})}></input>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
