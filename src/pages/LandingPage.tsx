import Download from "../components/Download"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Advantages from "./Advantages"
import Advantages2 from "./Advantages2"
import FAQ from "./FAQs"
import Features from "./Features"
import Home from "./Home"
import Testimonial from "./Testimonial"


function LandingPage() {
    return (
        <div className="overflow-hidden">
            <Header/>
            <Home/>
            <Features/>
            <Advantages/>
            <Advantages2/>
            <Testimonial/>
            <FAQ/>
            <Download/>
            <Footer/>
        </div>
    )
}

export default LandingPage