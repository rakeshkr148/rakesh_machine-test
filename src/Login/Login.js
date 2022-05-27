import React from 'react'

const Login = () => {
  return (
    <div>
        Login Form
        <form>
            <label>Username
                <input type="text" value="rakesh@xyz" />
            </label>
            <label>Password
                <input type="password" value="welcome123" />
            </label>
        </form>
    </div>
  )
}

export default Login;