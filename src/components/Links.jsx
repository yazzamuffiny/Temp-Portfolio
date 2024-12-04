import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages
import Home from '../pages/Home'
import Work from '../pages/Work'
import Contact from '../pages/Contact'


const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/works' element={<Work/>}/>
    </Routes>
  )
}

export default Links
