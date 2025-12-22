import React, { useState } from 'react'
import './images.css'
import img4 from '../../assets/img4.png'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img1 from '../../assets/img1.jpg'

function Images() {
    const [img,setImg]=useState(img1)
  return (
    <div className='image-sec'>
      <div className="images">
      <img src={img} alt=""  />
      <div className="image-btn">
        <button onClick={()=>{setImg(img1)}}>click</button>
        <button onClick={()=>{setImg(img2)}}>click</button>
        <button onClick={()=>{setImg(img3)}}>click</button>
      </div>
      </div>
      
    </div>
  )
}

export default Images