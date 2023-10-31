// import "./App.css"
import "../src/App.css"
// import "../src/components/ServiceSection/OurServices"
import Features from "./components/FeaturesSection/Features"
import Header from "./components/Header/Header"
import OurServices from "./components/ServiceSection/OurServices"
import Advertising from "./components/AdvertisingSection/Advertising"
import Project from './components/ProjectSection/Projects'
import Testimonial from "./components/TestimonialSection/Testimonial"
import OurTeam from "./components/TeamSection/OurTeam"
import Footer from "./components/Footer"







function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Features />
        <OurServices />
        <Advertising />
        <Project />
        <OurTeam />
        <Testimonial />

      </main>
      <Footer />
    </div>
  )
}

export default App
