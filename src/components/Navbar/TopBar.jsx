import React from 'react'

const TopBar = () => {
  
  return (
    <div className='px-[200px] text-[rgba(255,255,255,1)] items-center justify-between flex h-11 bg-[rgba(30,33,44,1)] w-1519'>
      <div className=''>Available 24/7 at (405) 555-0128</div>
      <ul className='w-[362px] flex justify-between'>
        <li>Delivery & returns</li>
        <li>Track-order</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
      <div className='flex mr-[-50px] ml-[50px]'>
        <img className='pt-[3px] mr-[10px]' src="/src/assets/flag-usa.svg" alt="" />
        Eng / $
      </div>
      <div className='flex'>
        <img className='mr-[4px]' src="/src/assets/Profile.svg" alt="" />
        <div className='mr-[4px]'>Log in</div>
        /
        <div className='ml-[4px]'>Register</div>
      </div>
    </div>
  )
}

export default TopBar