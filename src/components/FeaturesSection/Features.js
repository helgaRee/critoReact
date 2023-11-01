import React from "react"
import FeaturesBox from "./FeaturesBox"
import SectionTitle from "../Generics/SectionTitle"
import Button from "../Generics/Button"
//ICONS
import iconHandshake from '../../assets/images/Icon-handshake.svg'
import iconLightbuld from '../../assets/images/Icon-lightbulb.svg'
import iconGraf from '../../assets/images/Icon-graf.svg'
import iconSettings from '../../assets/images/Icon-settings.svg'

const Features = () => {
  const featuresListItems = [
    {
      icon: iconHandshake,
      title: "Business Advice",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      icon: iconLightbuld,
      title: "Startup Business",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      icon: iconGraf,
      title: "Financial Advice",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
    {
      icon: iconSettings,
      title: "Risk Management",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    },
  ]

  return (
    <section className="features-section">
      <div className="border-container">
        <div className="container">
          <div className="container-left">
            <div className="features-title">
              <SectionTitle
                title="Features"
                description="Our Accounting is trusted by thousand of companies"
              />
            </div>
            <div className="learn-more">
              <Button type="yellow" title="Learn More" className="fa-solid fa-arrow-up-right" />
            </div>
          </div>
          <div className="features-boxes">
            {featuresListItems.map((item, index) => (
              <FeaturesBox
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features