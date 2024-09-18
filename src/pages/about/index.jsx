import Aboutsectn from "../../components/sections/Aboutsectn"
import Core_values from "../../components/sections/Core-values"
import Team from "../../components/sections/Team"

const About = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="pt-14">
        <h1 className="font-semibold text-4xl text-center">About Us</h1>
        <p className="text-center w-full md:w-[55%] my-5 md:mb-12 mx-auto text-2xl">Welcome to PetroTrack, your go-to solution for seamless filling station management. Our website provides a comprehensive platform that allows you to easily manage your petrol, diesel, and lubricant sales. Calculate your daily, weekly, monthly, and annual sales, and much more.</p>
      </div>
      <div>
        <Aboutsectn />
        <Core_values />
        <Team />
      </div>
    </div>
  )
}

export default About