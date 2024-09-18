import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Solutions = () => {
  return (
    <div className="md:px-20 px-3 md:flex justify-between mt-10 md:mt-24">
        {/* Image */}
        <div className="md:w-[900px] w-full overflow-hidden md:h-[600px] rounded-xl bg-black">
            <img className="w-full h-full" src="src/assets/images/Rectangle 8.png" alt="" />
        </div>

        {/* Content */}
        <div className="md:w-[730px] w-full mt-5 md:mt-0">
            <h2 className="font-semibold text-sm border-l-2 border-black my-5 pl-2">Our Solutions</h2>
            <h1 className="font-bold text-4xl md:w-[530px]">Simplifying Filling Station Management</h1>
            <p className=" my-8 text-xl md:w-[530px]">Our complete filling station management solution includes a user-friendly website and a sales calculation system. With seamless integration and a user-focused design, our solution will elevate your business to the next level.</p>
            {/* Buttons */}
            <div className="grid md:grid-cols-2 gap-5 md:w-[530px] mt-[53px]">
                {/* Facebook */}
                <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] p-5 rounded-xl text-white "><FaFacebookF size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">9,723</p>
                        <p className="font-semibold text-lg">Account boosted</p>
                    </div>
                </div>

                  {/* Instagram */}
                  <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] p-5 text-white rounded-xl "><FaInstagram   size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">3,455</p>
                        <p className="font-semibold text-lg">Account optimized</p>
                    </div>
                </div>

                  {/* Tiktok */}
                  <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] p-5 text-white rounded-xl "><FaTiktok  size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">4,987</p>
                        <p className="font-semibold text-lg">Account promoted</p>
                    </div>
                </div>

                  {/* X */}
                  <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] text-white p-5 rounded-xl "><FaXTwitter size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">8,755</p>
                        <p className="font-semibold text-lg">Account managed</p>
                    </div>
                </div>

                  {/* Youtube*/}
                  <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] text-white p-5 rounded-xl "><FaYoutube   size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">9,568</p>
                        <p className="font-semibold text-lg">Account grow</p>
                    </div>
                </div>

                  {/* LinkedIn */}
                  <div className="flex gap-3">
                    <button className="bg-[#4C4C4C] text-white p-5 rounded-xl "><FaLinkedinIn size={35}/></button>
                    <div className="flex flex-col gap-1.5 mt-1.5">
                        <p className="text-xl">2,987</p>
                        <p className="font-semibold text-lg">Users hired</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions