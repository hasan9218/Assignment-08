import { useEffect, useState } from "react";
import Card from "../../Components/card/Card";
import { useAppsJsonData } from "../../Hoks/DataFetch";
import Loading from "../../Components/Loading/Loading";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router-dom";
import pageNoteFound from '../../assets/App-Error.png'


const Apps = () => {
    const { appsData, loading } = useAppsJsonData()
    const [changeAppData, setChangeAppData] = useState([])
    const [load, setLoad] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const handleOnChange = e => {
        setSearchValue(e.target.value)
        const term = e.target.value.trim().toLowerCase()
        setLoad(true)
        setTimeout(() => {
            const eChangeValue = appsData.filter(data => data.title.toLowerCase().includes(term))
            setChangeAppData(eChangeValue)
            setLoad(false)
        }, 500)
    }


    useEffect(() => {
        if (searchValue === '') {
            setChangeAppData(appsData)
        }
    }, [appsData, searchValue])

    if (loading) {
        return <Loading />
    }

    return (
        <div className="max-w-[1700px] mx-auto">
            <div className="py-20">
                <h1 className="text-3xl md:text-[48px] text-black font-bold text-center mb-5">Our All Applications</h1>
                <p className="text-center text-[20px] text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between lg:px-5">
                <h1 className="font-bold mt-5 text-black md:mt-0 text-center md:text-left text-[24px]">({changeAppData.length}) Apps Found</h1>
                <input type="search" value={searchValue} onChange={handleOnChange} name="search Apps" placeholder="🔍 Search apps" className="border border-gray-300 rounded-md p-2 text-black max-w-96 md:w-96 placeholder-gray-400 outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-9 lg:px-5">
                {
                    load ? <div className="lg:h-90 md:w-[800px] lg:w-[1700px] flex justify-center  items-center"><h1><MoonLoader color="blue" /></h1></div> : changeAppData.length === 0 ? <div className='col-span-full space-y-5 text-center'>
                        <div>
                            <img className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto' src={pageNoteFound} alt="" />
                        </div>
                        <div>
                            <h1 className='text-3xl text-black md:text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                        </div>
                        <div>
                            <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                        </div>
                        <div className="w-fit mx-auto">
                            <Link to={'/'}><button className='btn w-45 p-6 border-0 bg-gradient-to-br to-[#9F62F2] from-[#6530E4] font-semibold text-white text-[17px]'>Go Back!</button></Link>
                        </div>
                    </div> : changeAppData.map(appData => (<Card key={appData.id} appData={appData} />))
                }
            </div>
        </div>
    );
};

export default Apps;

