import React from 'react';
import { MdOutlineFacebook } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-8 pt-12">
                <div className="grid md:grid-cols-5 gap-8">
                    <div>
                        <Link to="/" className="flex items-center"><img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> <span className='text-2xl font-extrabold text-white'>HERO.IO</span> </Link>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-1 text-base">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Contact Administrator</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-1 text-base">
                            <li><a href="#">Education & Services</a></li>
                            <li><a href="#">Student Stories</a></li>
                            <li><a href="#">Download Apps</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Information</h4>
                        <ul className="space-y-1 text-base">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Join Us</a></li>
                        </ul>
                    </div>
                    {/* social links */}
                    <div>
                        <h4 className="text-white text-lg font-semibold mb-4">Social Links</h4>
                        <ul className="space-y-1 text-base">
                            <li className='flex items-center cursor-pointer'><span className='mr-1'><FaSquareXTwitter size={20} color="white" /></span>@CS — HERO.IO</li>
                            <li className='flex items-center cursor-pointer'><span className='mr-1'><FaLinkedin size={20} color="white" /></span>@CS — HERO.IO</li>
                            <li className='flex items-center cursor-pointer'><span className='mr-1'><MdOutlineFacebook size={20} color="white" /></span>@CS — HERO.IO</li>
                            <li className='flex items-center cursor-pointer'><span className='mr-1'><MdEmail size={20} color="white" /></span>support@HERO.IO</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-20 pb-7">
                    <p className="text-white text-sm md:text-base">© 2025 CS — HERO.IO All rights reserved.</p>
                </div>
        </footer>
    );
};

export default Footer;