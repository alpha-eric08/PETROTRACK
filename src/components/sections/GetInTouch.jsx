
const GetInTouch = () => {
  return (
    <div className="md:px-20 bg-[#F9F9F9] px-3">
      <div className="flex justify-between  py-14">
        <div className="w-[40%]">
          <h2 className="font-semibold text-sm border-l-2 border-black my-5 pl-2 ">Get in touch</h2>
          <h1 className="font-bold text-4xl mb-10 ">Let's Connect</h1>

           {/* Forms */}
          <form className='flex flex-col'>
            <label className='text-black md:text-xl font-medium mb-1'>Name</label>
            <input type='text' placeholder='Enter your name' className=' rounded-md bg-white border-none p-2' />

            <label className='text-black md:text-xl font-medium mb-1 mt-6'>Email</label>
            <input type='email' placeholder='Enter your email' className='bg-white rounded-md border-none p-2' />

            <label className='text-black md:text-xl font-medium mb-1 mt-6'>Message</label>
            <textarea name="Message" id="Message" className="h-36 resize-none rounded-md border-none bg-white p-2" placeholder="Write your message or question here..."></textarea>

            <button type='submit' className='mt-7 p-2 bg-[#003498] rounded-md hover:bg-[#0e2246]  font-semibold text-xl text-white '>Get Started</button>
        </form>
        </div>

        {/* Image */}
        <div>
          <img src="src/assets/images/laptop.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch