import React, { useContext } from 'react'
import { theamcontext } from '../context/Theamcontext'



function Button() {

    const {Theamcheange}=useContext(theamcontext)

  return (
    <div>
        <button className='btn-1' onClick={Theamcheange}>Megic Btn</button>
    </div>
  )
}

export default Button