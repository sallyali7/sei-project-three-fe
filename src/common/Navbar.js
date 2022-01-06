import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Log in</Link>
      <Link to="/recipes">Recipes</Link>
    </nav>
  )
}

export default Navbar