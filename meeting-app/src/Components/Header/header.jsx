import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

function Header({user}) {
  const navigate=useNavigate()
  return (
    <div className='header'>
        <div className="logo">
           <img src="logo7.png" alt="" />
        </div>
        <div className="navs">
            <ul type='none'>
            <li>Home</li>
            <li onClick={()=>navigate('/join')}>Join Meeting</li>
            <li onClick={()=> navigate('/newmeeting')}>New Meeting</li>
        </ul>
        </div>
        <div className="user">
            <i className='bx bxs-user-circle'></i>
            {user ? (
              <div className="user-text">
                <span>Welcome </span>
                <strong>{user.name}</strong>
              </div>
            ):(

        <div className="sign-btn">
          <button onClick={()=>navigate('/signin')}>Sign In</button>
        </div>
            )}
        </div>
    </div>
  )
}

export default Header