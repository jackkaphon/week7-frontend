import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}
