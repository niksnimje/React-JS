import React, { useState } from 'react'

function Addproduct() {

    const [formdata,setformdata]=useState({
        title:"",
        price:0,
        description:"",
        catagory:"",
        image:""
    })

    const {title,price,description,catagory,image}=formdata
    const handelchange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handelsubmit=(e)=>{
        e.preventDefault()
        // preventdefault()
        console.log(formdata)
    }

  return (
    <>
    <form action="" onSubmit={(e)=>handelsubmit(e)}>
            <input name='img' vlaue={image} onChange={(e)=>handelchange(e)} type="text" placeholder='img' /> <br />
            <input name='title' vlaue={title} onChange={(e)=>handelchange(e)} type="text" placeholder='title'/> <br />
            <select  name='catagory' vlaue={catagory} onChange={(e)=>handelchange(e)} id="">
                <option value="">Select Your Catagory</option>
                <option value="">men's clothing</option>
                <option value="">women's clothing</option>
                <option value="">electronics</option>
                <option value="">jewelery</option>
            </select> <br />
            <input  name='price' vlaue={price} onChange={(e)=>handelchange(e)} type="text" placeholder='price' /> <br />
            <input  name='description' vlaue={description} onChange={(e)=>handelchange(e)} type="text" placeholder='description' /> <br />
            <input  type="submit" />
        </form>
    
    </>
  )
}

export default Addproduct