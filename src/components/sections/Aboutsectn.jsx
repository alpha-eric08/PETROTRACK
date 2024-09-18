import { FaChartLine } from "react-icons/fa"
import Progressbar from "./Progressbar"
import { BsDatabaseFillCheck } from "react-icons/bs"

const Aboutsectn = () => {
  return (
    <div className='bg-[#1d1d1d] md:pt-20 py-10 md:pb-14 text-white md:px-20 '>

      <div className="grid grid-cols-1 gap-10 px-3 md:gap-28 md:grid-cols-2">
        <div className="rounded-xl overflow-hidden bg-gray-200  w-full md:h-[500px] lg:h-[620px] h-[400px]">
          <img className="w-full object-cover h-full" src="src/assets/images/image2.webp" alt="" />
        </div>

        {/* ProgressBar */}
        <div className="my-auto">
          <h2 className="font-medium md:text-xl text-lg ">About Us</h2>
          <h1 className="font-bold md:text-4xl text-2xl my-5">About PetroTrack</h1>
          <Progressbar />
        </div>
      </div>

      {/* Mission and Vission */}
      <div className="grid grid-cols-1 gap-10 px-3 md:gap-28 mt-10 md:grid-cols-2">
        {/* Vision */}
        <div>
          <h1 className="font-bold md:text-3xl sm:text-xl">Our Vision</h1>
          <p className="md:text-xl mt-2 md:w-[500px] mb-1">Our vision is to be the leading provider of petrol station management solutions, empowering businesses to achieve their full  potential and drive growth.</p>
          <button className="bg-[#003498] font-semibold rounded px-5 py-1 text-xl hover:bg-[#360155] duration-500 mt-1">Learn More</button>
        </div>

        {/* Mission */}
          <div>
            <h1 className="font-bold md:text-3xl sm:text-xl">Our Mission</h1>
            <div className="grid grid-cols-2 gap-10  md:gap-44 ">
              <div>
                <button className="bg-[#8A8A8A] p-5 rounded-xl my-4"><FaChartLine size={35}/></button>
                <p className="text-lg mt-2 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
              </div>
              <div>
                <button className="bg-[#8A8A8A] p-5 rounded-xl my-4"><BsDatabaseFillCheck  size={35}/></button>
                <p className="text-lg mt-2 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Aboutsectn

