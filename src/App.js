import "./App.css"

import Features from "./components/FeaturesSection/Features"
import Header from "./components/Header/Header"
import OurServices from "./components/ServiceSection/OurServices"
import Advertising from "./components/AdvertisingSection/Advertising"
import Testimonial from "./components/TestimonialSection/Testimonial"
import OurTeam from "./components/TeamSection/OurTeam"
import Footer from "./components/Footer/Footer"
import Projects from "./components/ProjectSection/Projects"
import About from "./components/AboutSection/About"
import ChooseUs from "./components/ChooesUsSection/ChooseUs"
import Articles from "./components/ArticleSection/Articles"
import Subscribe from "./components/SubscribeSection/Subscribe"
import NewsSection from "./components/NewsSection/NewsSection"


function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Advertising />
        <Features />
        <About />
        <OurServices />
        <ChooseUs />
        <Projects />
        <OurTeam />
        <Testimonial />
        <Articles />
        <Subscribe />
        <NewsSection />

      </main>
        <Footer />      
    </div>
  )
}

export default App
