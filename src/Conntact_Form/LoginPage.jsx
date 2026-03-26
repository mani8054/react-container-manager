import React, { useState } from 'react'
import './NavbarCss/LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    const storedata = JSON.parse(localStorage.getItem('user')) 

    if (!storedata) {
      alert("No user found, please register first")
      return
    }

    if (storedata.email === email && storedata.password === password) { 
      alert("Successfully logged in!")
      navigate('/Dashboard',{state:storedata})
    } else {
      alert("Your email or password is incorrect")
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Login</button>

          <p className="login-footer">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage