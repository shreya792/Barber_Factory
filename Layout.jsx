import React from 'react'
import Headder from './components/Header/Headder'
import Footer from './components/Header/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    
    <>
    <Headder/>
    <Outlet/>
    <Footer/>

    
    
    </>
  )
}

export default Layout