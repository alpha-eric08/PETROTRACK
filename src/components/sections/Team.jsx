import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { IoLogoGithub } from "react-icons/io"
import { teamMembers } from "./data"

const Team = () => {
  return (
    <div className="md:px-20 py-10 px-3 ">
        <div className=" flex flex-col items-center">
            <h2 className="font-semibold text-sm border-l-2 border-black my-5 pl-2 ">Our Team</h2>
            <h1 className="font-bold text-4xl mb-10 ">Collaboration for success</h1>
        </div>

        {/* Members */}
        <div className="flex justify-evenly flex-wrap gap-10">
            {teamMembers.map((team) => (
            <div key={team.id} className="text-center">
                <div className="relative bg-white  rounded-lg overflow-hidden  w-[230px] h-[250px] transition-transform duration-300 hover:scale-105">
                    <img src={team.image} alt="Card" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-500 hover:opacity-100">
                        <div className="text-center w-full mt-[168px] p-3 bg-[#1D1D1D]">
                            <h2 className="text-lg font-bold">Follow on</h2>
                            <div className="flex justify-between">
                                <a href="#" className="text-white border p-2 rounded-full duration-300 hover:text-[#360155]"><FaLinkedinIn  size={20}/></a>
                                <a href="#" className="text-white border p-2 rounded-full duration-300 hover:text-[#360155]"><FaInstagram  size={20}/></a>
                                <a href="#" className="text-white rounded-full duration-300 border p-2 hover:text-[#360155]"><IoLogoGithub  size={20}/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-1 ">
                    <h1 className="font-semibold text-2xl">{team.name}</h1>
                    <p className="font-medium text-sm">{team.role}</p>
                </div>
            </div>

            ))}
        </div>
    </div>
  )
}

export default Team