import { values } from "./data"

const Core_values = () => {
  return (
    <div className="md:px-20 px-3 md:pt-14 py-10 border-b-2 border-[#C4C4C4] md:flex justify-between">
        <div className="md:w-[680px]">
            <h2 className="font-semibold text-sm border-l-2 border-black my-5 pl-2">Our Core Values</h2>
            <h1 className="font-bold text-4xl md:w-[530px]">Efficient Solution for Your Fueling Needs</h1>
            {/* Values */}
            <div className="mt-8">
                {values.map((item) => (
                    <div key={item.id}>
                        <h1 className="bg-[#1D1D1D] md:w-[425px] py-4 text-white font-semibold text-2xl">{item.id}. {item.title}</h1>
                        <p className="text-lg mt-1 mb-8">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

        {/*image  */}
        <div className="md:w-[700px] md:h-[870px] w-full h-full rounded-2xl overflow-hidden bg-black">
            <img className="w-full h-full object-cover" src="src/assets/images/Rectangle 18.svg" alt="" />
        </div>
    </div>
  )
}

export default Core_values