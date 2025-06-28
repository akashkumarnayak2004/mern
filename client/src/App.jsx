import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Error from './pages/Error'
import Logout from './pages/Logout'
import AdminNavbar from './components/layouts/Admin-layout'
import AdminUsers from './pages/AdminUsers'
import AdminContacts from './pages/AdminContacts'
import AdminServices from './pages/AdminServices'
import { AdminUpdate } from './pages/AdminUpdate'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/about" element ={<About/>}/>
    <Route path ="/contact" element ={<Contact/>}/>
    <Route path ="/service" element ={<Service/>}/>
    <Route path ="/register" element ={<Register/>}/>
    <Route path ="/login" element ={<Login/>}/>
      <Route path ="/logout" element ={<Logout  />}/>
    <Route path ="*" element ={<Error/>}/>
    <Route path='/admin' element={<AdminNavbar/>}>
<Route path='users' element={<AdminUsers/>} />
<Route path='contacts' element={<AdminContacts/>} />
<Route path='services' element={<AdminServices/>} />
 <Route path="users/:id/edit" element={<AdminUpdate />} />

    </Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App