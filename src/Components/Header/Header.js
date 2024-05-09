import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
       <Link to="/"> <button className='home-btn'><span>MERN APP</span> Upload your Image</button></Link>
        <div>Register</div>
    </div>
  )
}

export default Header