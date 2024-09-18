
const Subscription = () => {
  return (
    <div className='bg-[#F9F9F9] text-black py-12 md:px-20 px-3 '>
        <h1 className='font-semibold text-3xl text-center md:w-[40%] mx-auto'>Efficient filling station management solutions, designed for your success</h1>

        {/* Form */}
        <form className="md:w-[26%] mx-auto mt-8">
            {/* Email */}
            <input type="email"  placeholder="Email" className="p-2 w-full"/>
            {/* Submit */}
            <button type="submit" className="bg-[#003498] text-white font-medium w-full p-2 rounded-md hover:bg-[#011b49] mt-5">Subscribe</button>
        </form>

        {/* Text */}
        <div className="md:flex justify-between mt-5 md:mt-20">
            <div className="mb-5 md:mb-0">
                <h2 className="font-semibold text-2xl">PetroTrack</h2>
                <ul className="text-[#555555] font-medium text-2xl">
                    <li>Our Team</li>
                    <li>Our Process</li>
                    <li>Our Services</li>
                </ul>
            </div>

            {/* Work hours */}
            <div>
                <h2 className="font-semibold text-2xl">Operational work hours</h2>
                <div className="flex justify-between border-b-2 text-xl font-medium  border-dashed border-black mt-2">
                    <p>Mon - Wed</p>
                    <p>: 7AM - 8PM</p>
                </div>
                <div className="flex justify-between border-b-2 text-xl font-medium  border-dashed border-black my-4">
                    <p>Thur - Sun</p>
                    <p>: 7AM - 7PM</p>
                </div>
                <div className="text-[#666666] font-medium text-lg flex justify-between">
                    <p>Weekend</p>
                    <p>Closed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscription