import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as api from "../../api"
import "./LoginForm.css"
//Form.css, located at ../Form/Form.css and it's 'className' attributes act global also affecting this file"
//Technically we have Form.css imported in this file as well!!

function LoginForm() {
    const [userData, setUserData] = useState({ name: "", surname: "", email: "", password: "" })
    const [loginMessage, setLoginMessage] = useState("")
    const [clrMsg, setClrMsg] = useState("")
    const url = "http://localhost:5000/login"

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const i = 10;
        const { status } = await api.loginUser(userData)
        if (status == 200) {
            setLoginMessage("You are logged in!")
            setClrMsg("greenMessage")
        } else {
            setLoginMessage("Your password or email is incorrect!")
            setClrMsg("redMessage")
        }
    }

    return (
        <div>
            <div className='main'>
                <h1>facebook</h1>
                <form method='post' onSubmit={handleSubmit}>
                    <div className='form'>
                        <input name="email" type="email" placeholder='E-mail' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required onChange={(e) => setUserData({ ...userData, email: e.target.value })}></input>
                        <input name="password" type="password" placeholder='Password' minLength="2" maxLength="20" required onChange={(e) => setUserData({ ...userData, password: e.target.value })}></input>
                        <button className="logIn" type='submit'>Log In</button>
                        <h5 className='frgtPwd'>Forgot password?</h5>
                        <h5 className={clrMsg}>{loginMessage}</h5>
                        <NavLink to="/register">
                            <button className="signUp" type='submit'>Create new account</button>
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
