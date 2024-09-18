import Subscription from "../../components/sections/Subscription";
import GoogleMap from "../../components/sections/GoogleMap";
import GetInTouch from "../../components/sections/GetInTouch";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="">
     {/* Hero Section */}
     <div className="pt-14">
        <h1 className="font-semibold text-4xl text-center">Contact Us</h1>
        <p className="text-center w-full md:w-[55%] my-5 md:mb-12 mx-auto text-2xl">If you have any questions or would like to learn more about our services, please don’t hesitate to contact us. Our team is always standing by and ready to help.</p>
      </div>

      {/* Headen and content */}
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-sm border-l-2 border-black my-5 pl-2 ">Our Core Values</h2>
        <h1 className="font-bold text-4xl mb-10 md:w-7/12 text-center ">Reach out to us today to learn more about our services and how we can help you streamline your filling station management.</h1>
      </div>

      {/* Contact  Icons*/}
      <div className="flex items-center justify-evenly my-10">
        {/* Phone */}
        <div className="text-center">
          <button className="bg-[#4C4C4C] p-5 text-white rounded-xl my-4"><FaPhone size={35}/></button>
          <h3 className="font-semibold text-sm">Talk to our team</h3>
          <p>+233 245000000</p>
        </div>

        {/* Email */}
        <div className="text-center">
          <button className="bg-[#4C4C4C] p-5 text-white rounded-xl my-4"><MdEmail size={35}/></button>
          <h3 className="font-semibold text-sm">Email Us</h3>
          <p>info@petrotrack.com</p>
        </div>

        {/* Operating Hurs */}
        <div className="text-center">
          <button className="bg-[#4C4C4C] p-5 text-white rounded-xl my-4"><IoTimeSharp  size={35}/></button>
          <h3 className="font-semibold text-sm">Operating Hours</h3>
          <p>Everyday - 7AM - 8PM</p>
        </div>
      </div>



      {/* Other components */}
      <GetInTouch />
      <GoogleMap />
      <Subscription />
    </div>
  )
}

export default Contact