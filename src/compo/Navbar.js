import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const findFood =(searchText)=>{
        navigate(`/home/${searchText}`)
    }
    return (
        <div className='flex justify-center flex-col items-center h-40 bg-gray-600'>
            <nav className='text-white'>
                <NavLink className='mr-3 px-3 bg-gray-800 rounded-lg' to='/home' >Food</NavLink>
                <NavLink className='mr-3 px-3 bg-gray-800 rounded-lg' to='/blog' >Blog</NavLink>
                <NavLink className='mr-3 px-3 bg-gray-800 rounded-lg' to='/friends' >Friends</NavLink>
            </nav>
            <div className='mt-4'>
                <input onChange={(e)=>findFood(e.target.value)} className='rounded-l px-1' type="text" placeholder='Search Your Food...'/>
                <button className='bg-amber-600 px-2 rounded-r text-white font-bold'>Search</button>
            </div>
        </div>
    );
};

export default Navbar;