import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='bg-gray-500 text-white p-4'>
      <div className='container mx-auto flex justify-around items-center'>
        <h2 className='text-xl'>
          <Link to="/" className='hover:text-blue-300 transition-colors duration-200'>User</Link>
        </h2>
        <h1 className='text-2xl'>
          <Link to='/userFamily' className='hover:text-blue-300 transition-colors duration-200'>User Family</Link>
        </h1>
       
      </div>
    </div>
  );
}

export default NavBar;
