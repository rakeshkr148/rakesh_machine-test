import React from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard")
  }
  return (
    <div>
        Login Form
        <form onSubmit={handleSubmit}>
            <label>Username
                <input type="text" value="rakesh@xyz" />
            </label>
            <label>Password
                <input type="password" value="welcome123" />
            </label>  
                <input type="submit"/>
        </form>
    </div>
  )
}

export default Login;