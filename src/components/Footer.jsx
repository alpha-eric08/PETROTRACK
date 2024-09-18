import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='bg-[#1D1D1D] text-white pt-8 md:pt-14'>
      <div className="grid grid-cols-2 px-3 gap-7 md:grid-cols-4 md:px-20 pb-10">
        <div>
          <h1 className="font-bold text-4xl">PetroTrack</h1>
        </div>

        {/* Explore */}
        <div>
          <h2 className="font-bold text-xl">Explore</h2>
          <ul className="flex flex-col gap-1 mt-3 font-medium">
            <li><a href="#" className="text-white hover:text-[#360155]">Services</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">Contact</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">About</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">Terms of Services</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="font-bold text-xl">Legal</h2>
          <ul className="flex flex-col gap-1 mt-3 font-medium">
            <li><a href="#" className="text-white hover:text-[#360155]">Privacy Policy</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">Cookies Policy</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">Accessibility</a></li>
            <li><a href="#" className="text-white hover:text-[#360155]">Sitemap</a></li>
          </ul>
        </div>

        {/* Connect Us */}
        <div>
          <h2 className="font-bold text-xl">Connect Us</h2>
          <div className="flex flex-col gap-4 mt-3">
            <a href="#" className="text-white flex gap-2 hover:text-[#360155]"><AiFillFacebook className="h-6 w-6"/>Facebook</a>
            <a href="#" className="text-white flex gap-2 hover:text-[#360155]"><AiFillTwitterCircle className="h-6 w-6"/>X</a>
            <a href="#" className="text-white flex gap-2 hover:text-[#360155]"><AiFillInstagram className="h-6 w-6"/>Instagram</a>
            <a href="#" className="text-white flex gap-2 hover:text-[#360155]"><AiFillYoutube className="h-6 w-6"/>Youtube</a>
          </div>
        </div>
      </div>
      {/* Copy Right */}
      <div className="text-center py-7 border-t-2 border-[#7B7B7B] font-medium text-xl">
        Copyright@2024. PetroTrack website. All Right Reserved.
      </div>
    </div>
  )
}

export default Footer