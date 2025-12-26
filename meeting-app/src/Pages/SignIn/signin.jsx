import React, { useState } from 'react'
import './Signin.css'
import { useNavigate } from 'react-router-dom'

function Signin({setUser}) {
    const navigate=useNavigate()
    const [form,setForm]=useState({
        name:"",
        email:""
    })
    function handleChange(e){
        const{name,value}=e.target 
        setForm(prev=>({
            ...prev,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault();
        setUser({
            name:form.name,
            email:form.email
        })
        navigate('/')
        
    }
  return (
    <div className="signin-page">
      <div className="signin-card">

        <h2>Sign in to Connectify</h2>
        <p>Enter your details to continue</p>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  )
}

export default Signin