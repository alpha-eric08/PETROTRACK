
const Forms = () => {
  return (
    <div>
        <form className='flex flex-col'>
          <label className='text-black md:text-xl font-medium mb-1'>Name</label>
          <input type='text' placeholder='Enter your name' className=' rounded-md bg-white border-none p-2' />

          <label className='text-black md:text-xl font-medium mb-1 mt-6'>Email</label>
          <input type='email' placeholder='Enter your email' className='bg-white rounded-md border-none p-2' />

          <label className='text-black md:text-xl font-medium mb-1 mt-6'>Phone Number</label>
          <input type="number" placeholder='Enter your phone number' className='rounded-md border-none bg-white p-2 ' />

          <button type='submit' className='mt-7 p-2 bg-[#003498] rounded-md hover:bg-[#0e2246]  font-semibold text-xl text-white '>Get Started</button>
        </form>
    </div>
  )
}

export default Forms