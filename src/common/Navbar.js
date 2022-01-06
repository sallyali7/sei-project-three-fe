import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex flex-row bd-highlight">
          <Link to="/" className="navbar-brand">
            <img src="../assets/Keto.png" alt="" width="60" height="40" className="navbar-logo"/>
          </Link>
          <Link to="/recipes" className="nav-item">Recipes</Link>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3">
          <Link to="/register" className="nav-item">Register</Link>
          <Link to="/login" className="nav-item">Log in</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



{/* <img alt="logo" className="navbar-brand"
              src ="../assets/Keto.png"/></Link> */}
{/* <Link to="/" className="nav-item">Home</Link> */}