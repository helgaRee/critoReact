import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AdvertisingSection from '../components/AdvertisingSection/Advertising'
import FeaturesSection from '../components/FeaturesSection/Features'
import AboutSection from '../components/AboutSection/About'
import OurServices from '../components/ServiceSection/OurServices'
import ChooseUsSection from '../components/ChooesUsSection/ChooseUs'
import ProjectSection from '../components/ProjectSection/Projects'
import TeamSection from '../components/TeamSection/OurTeam'
import Testimonial from '../components/TestimonialSection/Testimonial'
import ArticleSection from '../components/ArticleSection/Articles'
import Subscribe from '../components/SubscribeSection/Subscribe'


const Home = () => {
  return (
    <div className="wrapper">
      
      <Header />
      <main>
        <AdvertisingSection />
        <FeaturesSection />
        <AboutSection />
        <OurServices />
        <ChooseUsSection />
        <ProjectSection />
        <TeamSection />
        <Testimonial />
        <ArticleSection />
        <Subscribe />

      </main>
      <Footer />
    </div>
  )
}

export default Home