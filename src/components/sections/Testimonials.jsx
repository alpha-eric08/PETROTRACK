import { testimonies } from "./data"

const Testimonials = () => {
  return (
    <div className="bg-[#1d1d1d] text-white md:px-20 md:py-10 py-5 px-3">
      <h1 className='md:font-bold md:text-[50px]  font-semibold  text-4xl md:w-[1000px] mt-10 '>The ultimate solution for filling station management</h1>
      <h2 className="font-semibold mt-5 text-2xl ">Testimonials</h2>
      <p className="border-2 w-20 border-white "></p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 mt-8 md:mt-14 lg:grid-cols-3 gap-16">
        {testimonies.map((item) => (
          <div key={item.id}>
            <p className="font-medium mb-4 md:w-[400px]">{item.message}</p>
            <div className="flex gap-4">
              <div className="rounded-full bg-white overflow-hidden w-20">
                <img className="object-cover w-full h-full" src={item.image} alt="" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="font-medium text-[14px]">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials