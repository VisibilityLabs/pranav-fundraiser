import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateFundraiser from '../components/CreateFundraiser/CreateFundraiser'
import Fundraiser from '../components/Fundraiser/Fundraiser'
import Login from '../components/auth/Login'
import { Home } from '../components/Home/Home'
import NavbarLite from '../components/Common/NavbarLite'
import FooterLite from '../components/Common/FooterLite'


const LiteRoutes = () => {
  return (
    <BrowserRouter>
    <NavbarLite/>
      <Routes>
        <Route  path='/' element={<Fundraiser/>}/>
        <Route  path='home' element={<Home/>}/>
        <Route path='fundraiser/create' element={<CreateFundraiser />}/>
        <Route path='login' element={<Login />}/>
        <Route path='*' element={<Fundraiser />}/>
      </Routes>
      <FooterLite/>
    </BrowserRouter>
  )
}

export default LiteRoutes