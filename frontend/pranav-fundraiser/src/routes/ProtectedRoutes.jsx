import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateFundraiser from '../components/CreateFundraiser/CreateFundraiser'
import Fundraiser from '../components/Fundraiser/Fundraiser'
import Login from '../components/auth/Login'
import { Home } from '../components/Home/Home'


const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='fundraiser/page/:id' element={<></>}/>
        <Route path='fundraiser/create' element={<CreateFundraiser />}/>
        <Route path='/donate' element={<div>Ankur is here</div>}/> 
        <Route path='*' element={<Fundraiser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default ProtectedRoutes