import React from 'react';
import { useLoaderData } from 'react-router';
import { FaCaretDown } from "react-icons/fa";
import download from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';


const Install = () => {
    const install = useLoaderData()
    console.log(install)
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='max-w-7xl mx-auto text-center py-20'>
                <div className="heading mb-10">
                    <h2 className='text-4xl text-black font-bold mb-7'>Our All Applications</h2>
                    <p className='text-[#627382] text-base'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2 text-left text-xl font-medium'><h2>(132) Apps Found</h2></div>
                    <div className='mb-4 w-[200px] text-right'>
                        <select defaultValue="Large" className="select select-lg">
                            <option>Sort By Size</option>
                            <option>Large Orange</option>
                            <option>Large Tomato</option>
                        </select>

                    </div>
                </div>
                <div className=''>
                    {
                        install.map(install => (
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-x-3'>
                                        <div>
                                            <img className='w-16 h-16'
                                                src={install.image}
                                                alt="Shoes" /></div>
                                        <div className="">
                                            <h2 className="text-xl text-black text-left font-medium">
                                                {install.companyName}
                                            </h2>
                                            <div className="flex items-center justify-center gap-2">

                                                <div className="px-2 py-1 rounded-md flex items-center  text-xl text-[#00D390] font-semibold"><img src={download} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />{install.downloads}M</div>
                                                <div className="px-2 py-1 rounded-md flex items-center  text-xl text-[#00D390] font-semibold"><img src={star} alt="" style={{ width: '20px', height: '20px', marginRight: '10px' }} />{install.ratingAvg}</div>
                                                <div><p className='font-medium text-xl text-gray-500'>258 MB</p></div>


                                            </div>
                                        </div>
                                    </div>
                                    <div><button className='bg-[#00D390]'>Uninstall</button></div>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};


export default Install;