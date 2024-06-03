import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header className="bg-gray-800 text-white  w-full top-0 left-0 flex items-center justify-between sticky z-50">
            <h2 className='text-orange-500 text-[35px] font-serif px-2'><img src="/upflairs white logo.png" alt="" className='w-[40%] h-auto'/></h2>
            <nav className="flex flex-1 justify-center space-x-8 mr-[10%]">
                <NavLink to='/' className="hover:text-gray-300">Home</NavLink>
                <NavLink to='/login' className="hover:text-gray-300">Loginpage</NavLink>
                <NavLink to='/about' className="hover:text-gray-300">About</NavLink>
                <NavLink to='/pages' className="hover:text-gray-300">Contact</NavLink>
                <NavLink to='/contact' className="hover:text-gray-300">Query</NavLink>
            </nav>
            <div className="flex items-center pr-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-4  py-1 border border-white rounded bg-gray-800 text-white focus:outline-none"
                />
                <button className="px-2 ml-1 py-1 bg-orange-500 text-white border border-white rounded hover:bg-orange-600">
                    Search
                </button>
            </div>
        </header>
    );
};

export default Header;
