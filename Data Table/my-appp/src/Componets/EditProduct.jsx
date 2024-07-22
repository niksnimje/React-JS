import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditProduct(prams) {

    const {id}=useParams()
    const inisiatlset ={
        title:"",
        image:"",
        description:"",
        price:0,
        catagory:""
    }
    const [formdata,setformdata]=useState(inisiatlset)

    const hendelchange=((e)=>{
        setformdata({...formdata,[e.target.value]:e.target.value})
    })

    const hendelsubmit=((e)=>{
        e.preventDefault()
    })



    const {title,image,description,price,catagory}=formdata

    const getsingledata=()=>{
        axios.get(`http://localhost:3000/product${id}`)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getsingledata()
    },[])

  return (
    <>
        <h1>Edit Page</h1>
        <form action="" onSubmit={(e)}>
            <input name='image' value={image} onChange={(e)=>hendelchange(e)} type="text" placeholder='img' /> <br />
            <input  name='title' value={title} onChange={(e)=>hendelchange(e)} type="text" placeholder='title'/> <br />
            <select  name='catagory' value={catagory} onChange={(e)=>hendelchange(e)} id=""> 
                <option value="">Select Your Catagory</option>
                <option value="">men's clothing</option>
                <option value="">women's clothing</option>
                <option value="">electronics</option>
                <option value="">jewelery</option>
            </select> <br />
            <input  name='price' value={price} onChange={(e)=>hendelchange(e)} type="text" placeholder='price' /><br />
            <input   name='description' value={description} onChange={(e)=>hendelchange(e)}type="text" placeholder='description' /><br />
            <input  type="submit" />
        </form>
    </>
  )
}

export default EditProduct