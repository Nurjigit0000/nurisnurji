import React from 'react'
import Header from './pages/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './pages/footer/Footer';
import AboutUs from './pages/home/AboutUs';
import TopBar from './components/Navbar/TopBar';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <TopBar />
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
