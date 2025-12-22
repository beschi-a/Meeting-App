import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Meeting</h1>
        </div>
        <div className="navs">
            <ul type='none'>
            <li>Home</li>
            <li>Join Meeting</li>
            <li>Schedule Meeting</li>
            <li>New Meeting</li>
        </ul>
        </div>
        <div className="user">
            <h3>User</h3>
        </div>
    </div>
  )
}

export default Header