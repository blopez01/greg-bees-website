import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                BEE - 14mins in <i className='fab fa-typo3'/>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar