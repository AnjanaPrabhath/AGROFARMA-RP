import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Router from '../routes/Router'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout