import React from 'react'
import '../../css/App.css'

const Footer = () => {
  return (
    <div className='bg-gray-900 px-[200px] w-1519 h-[358px] flex'>
      <ul className='leading-6  mt-[60px]' >
        <li className='mb-[7px] text-white'>HELP</li>
        <li className='mb-[7px] our-color'>Delivery & returns</li>
        <li className='mb-[7px] our-color'>FAQ</li>
        <li className='mb-[7px] our-color'>Track order</li>
        <li className='mb-[7px] our-color'>Contacts</li>
        <li className='mb-[7px] our-color'>Blog</li>
      </ul>
      <ul className='ml-[120px]  mt-[60px]'>
        <li className='mb-[7px] text-white'>SHOP</li>
        <li className='mb-[7px] our-color'>New arrivals</li>
        <li className='mb-[7px] our-color'>Trending now</li>
        <li className='mb-[7px] our-color'>Sales</li>
        <li className='mb-[7px] our-color'>Brands</li>
      </ul>
      <div className='ml-[120px]  mt-[60px]'>
        <div className='mb-[7px] text-white'>GET IN TOUCH</div>
        <div className='mb-[7px] text-white'>Call: <span className=' our-color'>(405) 555-0128</span></div>
        <div className='mb-[7px] text-white'>Email: <span className=' our-color'>hello@createx.com</span></div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> 
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className='text-white ml-[120px] mt-[60px]'>DOWNLOAD OUR APP </div>

    </div>
  )
}

export default Footer
