import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",cursor: "move" }}>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/products'>Product</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>


    </div>
  )
}


export default Navbar
