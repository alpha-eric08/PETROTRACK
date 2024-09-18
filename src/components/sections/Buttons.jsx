

const Buttons = () => {
  return (
    <div className="md:mt-14 mt-12 border-b-2 border-[#A3A3A3] mx-auto px-3 md:px-0 pb-10">
        <h1 className="font-semibold text-2xl text-center mx-auto md:w-[40%] ">Click on the button below to record day and night sales, manage transaction and enter other details.</h1>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-0 justify-between my-7 mx-auto md:w-[40%] ">
            <a href="#">
                <button className="font-medium text-xl p-2 rounded-md bg-[#003498] text-white hover:bg-[#003440] duration-300">Record Sales</button>
            </a>
            <a href="#">
                <button className="font-medium text-xl p-2 rounded-md bg-[#003498] text-white hover:bg-[#003440] duration-300">Record Transaction</button>
            </a>
            <a href="#">
                <button className="font-medium text-xl p-2 rounded-md bg-[#003498] text-white hover:bg-[#003440] duration-300">Customer Record</button>
            </a>
            <a href="#">
                <button className="font-medium text-xl p-2 rounded-md bg-[#003498] text-white hover:bg-[#003440] duration-300">Record Inventory</button>
            </a>
        </div>
    </div>
  )
}

export default Buttons