import Buttons from "../../components/sections/Buttons"
import Solutions from "../../components/sections/Solutions"
import Subscription from "../../components/sections/Subscription"

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="pt-14">
        <h1 className="font-semibold text-4xl text-center">Services</h1>
        <p className="text-center w-full md:w-[990px] my-5 mx-auto text-2xl">At PetroTrack, we provide intuitive solutions for your filling station management needs. Our seamless website and sales calculation system will streamline your operations and help you achieve your business goals.</p>
      </div>

      {/* Other components */}
      <Solutions />
      <Buttons />
      <Subscription />
    </div>
  )
}

export default Services