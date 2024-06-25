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
import Footer from './Components/Footer/Footer'
import Settings from './Pages/Userpages/Settings'
import Bookmarks from './Pages/Userpages/Bookmarks'
import Information from './Pages/Userpages/Information'
import Profile from './Pages/Userpages/Profile'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobseekers" element={<Jobseekers />} />
      <Route path="jobseekers/users/:id" element={<Userdetail />} />
      <Route path="*" element={<NotFound />} />

      <Route path="/dashboard/profile/freelancer" element={<Profile/>}>
        <Route path="" element={<Information/>} />
        <Route path="bookmarks" element={<Bookmarks/>} />
        <Route path="settings" element={<Settings/>} />
      </Route>
    </Routes>
    <Footer />
  </>

)

export default App
