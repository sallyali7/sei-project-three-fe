import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
  return (
    <footer>
      <Link to="/about">
        About 
      </Link>
      <Link to="/whatisketo">
        What is Keto?
      </Link>
      <Link to="/stories">
        Success Stories
      </Link> 
    </footer>
  )
}

export default Footer