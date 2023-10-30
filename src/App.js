// import "./App.css"
import "../src/App.css"
import "../src/components/ServiceSection/OurServices"
import Features from "./components/FeaturesSection/Features"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import OurServices from "./components/ServiceSection/OurServices"
import Advertising from "./components/AdvertisingSection/Advertising"
import Project from './components/ProjectSection/Projects'
import SectionTitle from "./components/Generics/SectionTitle"
import OurTeam from "./components/TeamSection/OurTeam"
import Testimonial from "./components/TestimonialSection/Testimonial"






function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Advertising />
        <Features />
        <OurServices />
        <Project />
        <OurTeam />
        <Testimonial />

      </main>
      <Footer />
    </div>
  )
}

export default App
