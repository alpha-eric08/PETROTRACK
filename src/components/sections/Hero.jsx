import React from 'react'
import Forms from '../Forms'
import { LiaStarSolid } from "react-icons/lia";

const Hero = () => {
  return (
    <div className='bg-gray-100 md:px-20 md:pt-12 pt-5 px-5 w-full'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-96'>
            <div>
                <div>
                    <h1 className='md:font-bold md:text-5xl font-semibold text-2xl'>Revolutionalizing filling station management</h1>
                    <p className='py-5 md:text-xl text-base font-medium md:w-[600px]'>Welcome to PetroTrack, the seamless filling station management solution for your business needs, designed with your convenience in mind.</p>
                </div>
                <div className=' flex flex-wrap justify-center gap-5 md:justify-between md:w-[550px] md:mt-11'>
                    <div>
                        <div className='flex mb-2 gap-3 text-yellow-400'>
                            <LiaStarSolid  size={25}/>
                            <LiaStarSolid  size={25}/>
                            <LiaStarSolid  size={25}/>
                            <LiaStarSolid  size={25}/>
                            <LiaStarSolid  size={25}/>
                        </div>
                        <p className='font-bold text-xl '>4.8<span className='font-light text-sm'>/50</span></p>
                    </div>
                    <div className='flex gap-3'>
                        <div className='rounded-full bg-blue-300 h-20 w-20 overflow-hidden' >
                            <img className='h-full w-full object-cover ' src="src/assets/images/person3.png" alt="" />
                        </div>
                        <p className='font-bold mt-3 text-xl '>24k <br />
                        <span className='font-medium text-lg'>Happy Customer</span></p>
                    </div>
                </div>
            </div>
             <Forms />
        </div>
        <div className='flex flex-wrap gap-16 justify-center md:justify-start md:gap-20 py-28'>
            <p className='font-medium text-2xl'>Trusted by <br /> global companies</p>
            <button className='border-2 border-[#828282] text-[#443f3f] rounded-md md:py-6 md:px-12 px-6 py-3 md:text-3xl text-xl font-medium md:font-semibold '>GOIL</button>
            <button className='border-2 border-[#828282] text-[#443f3f] rounded-md md:py-6 md:px-12 px-6 py-3 md:text-3xl text-xl font-medium md:font-semibold '>ALLIED</button>
            <button className='border-2 border-[#828282] text-[#443f3f] rounded-md md:py-6 md:px-12 px-6 py-3 md:text-3xl text-xl font-medium md:font-semibold '>SHELL</button>
            <button className='border-2 border-[#828282] text-[#443f3f] rounded-md md:py-6 md:px-12 px-6 py-3 md:text-3xl text-xl font-medium md:font-semibold '>UNITY</button>
        </div>
    </div>
  )
}

export default Hero