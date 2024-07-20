import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Products from '../components/Products';
import About from '../components/About';
import Login from '../components/Login';



function AllRoutes() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/login" element={<Login />}  />
    </Routes>
    </div>
  )
}

export default AllRoutes
