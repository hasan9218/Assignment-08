import React from 'react';
import { useLoaderData } from 'react-router';
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';

const Trending = () => {
    const trending = useLoaderData();
    console.log(trending);
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-7xl mx-auto text-center py-20'>
                <div className="heading mb-10">
                    <h2 className='text-4xl text-black font-bold mb-7'>Trending Apps</h2>
                    <p className='text-[#627382] text-base'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
                    {
                        trending.slice(0, 8).map(trending => (
                            <div key={trending.id}>
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img className='w-full h-[316px]'
                                            src={trending.image}
                                            alt="App Image" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {trending.companyName}
                                        </h2>
                                        <div className="card-actions justify-between">
                                            <div className="bg-[#F1F5E8] px-4 py-1 rounded-md flex items-center gap-2 text-xl text-[#00D390] font-semibold">
                                                <img src={download} alt="Downloads" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                                                {trending.downloads}M
                                            </div>
                                            <div className="bg-[#F1F5E8] px-4 py-1 rounded-md flex items-center gap-2 text-xl text-[#00D390] font-semibold">
                                                <img src={star} alt="Rating" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                                                {trending.ratingAvg}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md text-white font-medium text-xl px-7 py-2 mt-10'>Show All</button>
            </div>
        </div>
    );
};

export default Trending;