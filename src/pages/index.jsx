import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landingpage from "./home"
import About from "./about"
import Contact from "./contact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Services from "./services"


function Mainpages() {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landingpage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}

export default Mainpages