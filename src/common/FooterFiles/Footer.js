import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
  return (
    <footer className="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/about" className="nav-item">
        About 
        </Link>
        <Link to="/whatisketo" className="nav-item">
        What is Keto?
        </Link>
        <Link to="/stories" className="nav-item">
        Success Stories
        </Link> 
      </div>
    </footer>
  )
}

export default Footer