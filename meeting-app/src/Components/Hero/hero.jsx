import './hero.css'

import React from 'react'

function Hero() {
  return (
  <div className='card-sec'>
    <div className="cards" style={{backgroundColor:"lightblue"}}>
        <span>
            ➕
        </span>
        <h3>New Meeting</h3>
        <p>Start a instant meeting</p>
    </div>
    <div className="cards" style={{backgroundColor:"orange"}}>
        <span>
            👤
        </span>
        <h3>New Meeting</h3>
        <p>Start a instant meeting</p>
    </div>
    <div className="cards" style={{backgroundColor:"violet"}}>
        <span>
            🎥
        </span>
        <h3>New Meeting</h3>
        <p>Start a instant meeting</p>
    </div>
  </div>
  )
}

export default Hero