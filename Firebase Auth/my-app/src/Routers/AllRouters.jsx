import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../components/PrivateRoutes'
import Login from '../components/Login'
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

function AllRouters() {
  return (
    <>
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default AllRouters