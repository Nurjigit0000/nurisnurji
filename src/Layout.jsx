import React from 'react'
import Header from './pages/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from './components/Navbar';
import Footer from './pages/footer/Footer';

const Layout = () => {
  return (
    <BrowserRouter>
      <div id='Layout'>
        <Header />
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Layout
