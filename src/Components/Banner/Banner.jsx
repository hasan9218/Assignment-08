import React from 'react';
import icons1 from '../../assets/play.png';
import icons2 from '../../assets/apps.png';
import banner from '../../assets/hero.png';
const Banner = () => {
    return (
        <div>

            <div className='bg-[#f5f5f5] pt-20 px-2'>
                <div className='max-w-7xl mx-auto text-center'>
                    <h2 className='font-bold text-black text-4xl md:text-6xl mb-10'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive</span> Apps</h2>
                    <p className='md:px-40 text-[#627382] text-base mb-7'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='flex items-center justify-center gap-4 mb-10'>
                        <a href="https://play.google.com/store/games?device=windows" target="blank"><button className='flex items-center cursor-pointer justify-center border-1 border-gray-300 rounded-lg px-5 py-2 text-black font-bold'><img src={icons1} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />Google Play</button></a>
                        <a href="https://www.apple.com/app-store/" target="blank"><button className='flex items-center justify-center cursor-pointer border-1 border-gray-300 rounded-lg px-5 py-2 text-black font-bold'><img src={icons2} alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />App Store</button></a>
                    </div>
                    <img className='mx-auto' src={banner} alt="Logo" style={{}} />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-20'>
                <div className='max-w-7xl mx-auto text-center'>
                    <div className="heading mb-16"><h2 className='text-3xl md:text-4xl text-white font-semibold'>Trusted by Millions, Built for You</h2></div>
                    <div className="content grid md:grid-cols-3">
                        <div className='text-white'>
                            <p className='text-base mb-3'>Total Downloads</p>
                            <h2 className='text-3xl md:text-7xl font-bold mb-5'>29.6M</h2>
                            <p className='text-base'>21% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p className='text-base mb-3'>Total Reviews</p>
                            <h2 className='text-3xl md:text-7xl font-bold mb-5'>906K</h2>
                            <p className='text-base'>46% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p className='text-base mb-3'>Active Apps</p>
                            <h2 className='text-3xl md:text-7xl font-bold mb-5'>132+</h2>
                            <p className='text-base'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Banner;