import React from "react"
import ServiceBox from "./ServiceBox"
import SectionTitle from "../Generics/SectionTitle"
import Button from "../Generics/Button"

const OurServices = () => {
  // skapar en lista att samla artiklar
  const services = [
    {
      title: "Business Advice",
      description:
        "Lorem, ipsum dolor sit amet concectetur adipisicing elit. Officiis in nam possimus.",
      url: "/services/businessadvice /",
    },
    {
      title: "Startup Business",
      description:
        "Lorem, ipsum dolor sit amet concectetur adipisicing elit. Officiis in nam possimus.",
      url: "/services/startupbusiness /",
    },
    {
      title: "Financial Advice",
      description:
        "Lorem, ipsum dolor sit amet concectetur adipisicing elit. Officiis in nam possimus.",
      url: "/services/financialadvice /",
    },
    {
      title: "Risk Management",
      description:
        "Lorem, ipsum dolor sit amet concectetur adipisicing elit. Officiis in nam possimus.",
      url: "/services/riskmanagement /",
    },
  ]
  
  return (
    <section className="service-section">
      <img
        className="background-lines-right"
        src="images/background-lines-right.svg"
        alt="Background Lines"
      />
      <div className="container">
        <SectionTitle
          title="Our Services"
          description="We Provide The Best Consulting Services"
        />
        <div className="content">
          {/* Loopa igenom listans titlar */}
          {/* Mappar om listan, till en NY lista, och loopar ut */}
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              title={service.title}
              description={service.description}
              url={service.url}
            />
          ))}
        </div>
        <Button type="" title="Browse Services" url="/services"   className="arrow-top-right fa-regular fa-arrow-up-right"/>
      </div>
    </section>
  )
}

export default OurServices
