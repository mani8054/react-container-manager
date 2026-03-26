import React from 'react'
import { Link } from 'react-router-dom'
import '../NavbarCss/Navbar.css'

const Navbar = () => {
  return (
    <div className='mainbar'>
      <nav className='navbarr'>
        <div className="logo">
          <h2>ContactPro</h2>
        </div>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to='/AddContact'>Add Contact</Link>
          <Link to='/DisplayContact'>Display Contact</Link>
          <Link to='/Registerpage'>Register</Link>
          <Link to='/LoginPage'>Login</Link>
          <Link to='/Dashboard'>Dashboard</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar