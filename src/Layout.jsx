import React from 'react'
import Header from './pages/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './pages/footer/Footer';
import AboutUs from './pages/home/AboutUs';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Layout 
