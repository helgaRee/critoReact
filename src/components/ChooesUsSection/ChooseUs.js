import React from "react"
import SectionTitle from "../Generics/SectionTitle"
//Images
import imgFrame1 from "../../assets/images/Frame23.svg"
import imgFrame2 from "../../assets/images/icon-choose-us-second.svg"
import imgFrame3 from "../../assets/images/icon-design.svg"
import imgFrame4 from "../../assets/images/icon-ai.svg"
import imgChooseUs from "../../assets/images/choose-us.png"

import ChooseUsBox from "./ChooseUsBox"

const ChooseUs = ({ url, image, title, description }) => {
  //Lista

  const items = [
    {
      url: "/chooseus/process /",
      image: imgFrame1,
      title: "Process Excellence",
      description: "Lorem, ipsum dolor sit amet concectetur.",
    },
    {
      url: "/chooseus/strategic /",
      image: imgFrame2,
      title: "Strategic Planning",
      description: "Lorem, ipsum dolor sit amet concectetur.",
    },
    {
      url: "/chooseus/experience /",
      image: imgFrame3,
      title: "Experience Design",
      description: "Lorem, ipsum dolor sit amet concectetur.",
    },
    {
      url: "/chooseus/artificial /",
      image: imgFrame4,
      title: "Artificial Intelligence",
      description: "Lorem, ipsum dolor sit amet concectetur.",
    },
  ]

  return (
    <section className="choose-us">
      <div className="container">
        <div className="content">
          <div className="main-img-container">
            <div className="frame-grey"></div>
            <img
              className="main-img"
              src={imgChooseUs}
              alt="Image of two women discussing"
            />
          </div>

          <SectionTitle
            title="Why Choose Us"
            description="Why We Are The Best Business Consulting Agency"
          />
          {/* Loopa ut listan till html */}
          {items.map((item, index) => (
            <ChooseUsBox
              key={index}
              url={item.url}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs
