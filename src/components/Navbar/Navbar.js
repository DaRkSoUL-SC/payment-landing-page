import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-items'>
            <li className='nav-links'>LOGO</li>
        </ul>
        <ul className='nav-items'>
            <li className='nav-links'>Home</li>
            <li className='nav-links'>Services</li>
            <li className='nav-links'>About</li>
            <li className='nav-links'>Testimonials</li>
            <li className='nav-links'>Contact</li>
        </ul>
        <ul className='nav-items'>
            {/* Search Icon */}
            <li className='nav-links'><button className='btn'>Sign In</button></li>
        </ul>
    </div>
  )
}

export default Navbar