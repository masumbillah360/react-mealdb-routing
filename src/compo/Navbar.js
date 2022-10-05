import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-center items-center h-8 bg-gray-800 text-white'>
                <NavLink className='mr-3 px-3 bg-gray-600 rounded-lg' to='/home' >Home</NavLink>
                <NavLink className='mr-3 px-3 bg-gray-600 rounded-lg' to='/blog' >Blog</NavLink>
                <NavLink className='mr-3 px-3 bg-gray-600 rounded-lg' to='/friends' >Friends</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;