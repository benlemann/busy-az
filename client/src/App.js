import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Jobseekers from "./Pages/Jobseekers/Jobseekers"
import Userdetail from './Pages/Jobseekers/Userdetail'
import NotFound from './Pages/Notfound/NotFound'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signup" element={<Jobseekers/>} />
        <Route path="jobseekers/users/:id" element={<Userdetail/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  
  )
}

export default App
