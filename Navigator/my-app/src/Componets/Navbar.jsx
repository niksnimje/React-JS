import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Authcontext } from '../Routers/Authcontext'


function Navbar() {

  const {logout}=useContext(Authcontext)

  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/product'>Product</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}


export default Navbar
