import noPageFound from '../../assets/error-404.png'
const NoAppsFound = () => {
    return (
        <div className="max-h-90 max-w-[1700px] flex justify-center items-center">
            <div className='space-y-5'>
                <div>
                    <img className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto' src={noPageFound} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl text-black md:text-5xl font-semibold'>Oops, page not found!</h1>
                </div>
                <div>
                    <p className='text-gray-500'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
                <div className="w-fit mx-auto">
                    <Link to={'/'}><button className='btn w-45 p-6 border-0 bg-gradient-to-br to-[#9F62F2] from-[#6530E4] font-semibold text-white text-[17px]'>Go Back!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NoAppsFound;