// import React from 'react'

// const Navbar = () => {
//   return (
//       <div className='flex items-center justify-between md:py-7 md:px-16 p-4 z-[100] border-2 w-full'>
       

//         {/* Navigation */}
//         <nav>
//             <ul className='flex'>
//               <li className='px-6 hover:text-black/50 active:border-2 border-black rounded-md text-black font-medium md:font-semibold text-lg  md:text-xl'>
//                 <a href="/services">Services</a>
//               </li>
//               <li className='px-6 hover:text-black/50 active:border-2 border-black rounded-md text-black font-medium md:font-semibold text-lg  md:text-xl'>
//                 <a href="/about">About Us</a>
//               </li>
//               <li className='px-6 hover:text-black/50 active:border-2 border-black rounded-md text-black font-medium md:font-semibold text-lg  md:text-xl'>
//                 <a href="/contact">Contact Us</a>
//               </li>
//             </ul>
//         </nav>

//         {/* Button */}
//         <div>
//           <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
//         </div>
//     </div>
//   )
// }

// export default Navbar


import { MdOutlineClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
      let Links =[
        {name:"Services",link:"/services"},
        {name:"About Us",link:"/about"},
        {name:"Contact Us",link:"/contact"},
      ];

      let [open,setOpen]=useState(false);

 
  return (
    <div className='shadow-md w-full sticky z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between shadow-sm md:py-6 md:px-16 bg-white py-4 px-7'>
        
        {/* Logo */}
        <h1 className='text-black md:text-4xl text-2xl font-bold '>
          <a href="/">PetroTrack</a>
        </h1>

       <div onClick={()=>setOpen(!open)} className='text-3xl  absolute right-8 top-4 cursor-pointer md:hidden'>
       {open ?<MdOutlineClose/> : <IoMenu />}
       </div>
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8   md:my-0 my-7'>
              <a href={link.link} className='px-6 hover:text-black/50 active:border-2 rounded-md text-black font-medium  md:text-xl duration-500 text-lg font-inter md:font-semibold'>{link.name}</a>
            </li>
          ))
        }
        <a href="/contact">
          <button className='bg-[#003498]  py-2 px-6 rounded-md  hover:bg-[#0e2246] text-white md:ml-8 font-inter font-semibold md:hidden'>Get Started</button>
        </a>
       </ul>
       <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'hidden':'top-[-490px]'}`}>
        <a href="/contact">
          <button className=' bg-[#003498] md:ml-8 py-2 px-5 rounded-md hover:bg-[#0e2246] font-semibold text-xl text-white '>Get Started</button>
        </a>
       </div>
      </div>
    </div>
   )
 }

export default Navbar