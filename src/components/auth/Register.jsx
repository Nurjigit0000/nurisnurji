import React from 'react';

const Register = () => {
  return (
    <div className='flex justify-center'>
      <div className='fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-10'></div>
      {/* The backdrop with a gray color and 50% opacity */}
      
      
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-md z-20'>
        <h1 className='font-lato text-28 font-bold leading-42 text-center'>Sign up</h1>
        <form>
        </form>
      </div>
    </div> 
  );
}

export default Register;
