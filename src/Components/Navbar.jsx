import React from 'react';
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa6";

import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-white shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='text-black font-medium'>
                                <NavLink to="/" className=" text-sm hover:text-[#632ee3]">Home</NavLink>
                            </li>
                            <li className='text-black font-medium'>
                                <NavLink to="/products" className=" text-sm hover:text-[#632ee3]">Apps</NavLink>
                            </li>
                            <li className='text-black font-medium'>
                                <NavLink to="/install" className=" text-sm hover:text-[#632ee3]">Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center"><img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} /> <span className='text-sm md:text-2xl font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>HERO.IO</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-black font-medium'>
                            <NavLink to="/" className=" text-lg hover:text-[#632ee3]">Home</NavLink>
                        </li>
                        <li className='text-black font-medium'>
                            <NavLink to="/products" className=" text-lg hover:text-[#632ee3]">Apps</NavLink>
                        </li>
                        <li className='text-black font-medium'>
                            <NavLink to="/install" className=" text-lg hover:text-[#632ee3]">Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a src="#" className="text-white text-sm md:text-xl py-5 btn bg-gradient-to-r flex items-center from-[#632EE3] to-[#9F62F2]"><FaGithub />Contribute</a>
                </div>
            </div>
        </div>

    );
};


export default Navbar;