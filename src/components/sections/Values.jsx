
const Values = () => {
  return (
    <div className='text-black px-3 md:px-20 bg-white w-full py-10 md:py-14'>
        <div className='md:flex justify-between'>
            {/* Content */}
            <div className='md:w-[60%]'>
                <h1 className='md:font-bold md:text-[50px]  font-semibold text-center md:text-left text-4xl md:w-[800px]'>Specializing in seamless filling station management</h1>
                <h2 className='font-semibold text-3xl my-3 md:my-5'>Our Values</h2>
                {/* Main content */}
                <div className='md:grid grid-cols-2 md:gap-16'>
                    <div>
                        <h3 className='font-semibold text-xl mb-1'>Efficiency and convenience</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                    </div>
                    <div className='my-5 md:my-0'>
                        <h3 className='font-semibold text-xl mb-1'>Transparency and honesty</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
                    </div>
                </div>
            </div>
            {/* Image */}
            <div className='rounded-xl md:w-[492px] overflow-hidden h-[335px]'>
                <img className='w-full object-cover h-full' src="src/assets/images/car.webp" alt="" />
            </div>
        </div>
        {/*  */}
        <div className="text-center">
            <h1 className='md:font-bold md:text-[50px]  font-semibold  text-4xl md:w-[1000px] mt-10 mb-5 mx-auto'>Efficient solutions for your filling station management needs</h1>
            <button className="bg-[#003498] font-semibold text-white rounded px-5 py-1 text-xl hover:bg-[#360155] duration-500 mt-1">Learn More</button>
        </div>
    </div>
  )
}

export default Values