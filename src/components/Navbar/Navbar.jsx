import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/about-us'>
        <li>About us</li>
      </Link>
      <Link to='https://t.me/+OyDo6Hu5Mbw5YzVi'>
        <li>Support</li>
      </Link>
    </ul>
  )
}

export default Navbar
