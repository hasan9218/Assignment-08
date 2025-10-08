import React from 'react';
import { useLoaderData } from 'react-router';
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';
import { CiSearch } from "react-icons/ci";

const Products = () => {
    const trending = useLoaderData()
    console.log(trending)
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-7xl mx-auto text-center py-20'>
                <div className="heading mb-10">
                    <h2 className='text-4xl text-black font-bold mb-7'>Our All Applications</h2>
                    <p className='text-[#627382] text-base'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex'>
                    <div className='w-1/2 text-left text-xl font-medium'><h2>(132) Apps Found</h2></div>
                    <div className='relative mx-auto mb-4 w-1/2 text-right'>
                        <CiSearch className='absolute right-[370px] top-1/2 transform -translate-y-1/2 text-gray-500' size={20} />
                        <input
                            type="text"
                            placeholder="Search Apps"
                            className='w-[400px] pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:outline-none'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
                    {
                        trending.map(trending => (
                            <div>
                                <div className="card bg-base-100 shadow-sm">
                                    <figure>
                                        <img className='w-full h-[316px]'
                                            src={trending.image}
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {trending.companyName}
                                        </h2>
                                        <div className="card-actions justify-between">

                                            <div className="bg-[#F1F5E8] px-4 py-1 rounded-md flex items-center gap-2 text-xl text-[#00D390] font-semibold"><img src={download} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />{trending.downloads}M</div>
                                            <div className="bg-[#F1F5E8] px-4 py-1 rounded-md flex items-center gap-2 text-xl text-[#00D390] font-semibold"><img src={star} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />{trending.ratingAvg}</div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;