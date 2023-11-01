import React from "react"
import ProjectBox from "./ProjectBox"
import SectionTitle from "../Generics/SectionTitle"
import Button from "../Generics/Button"
//IMAGES
import caseBusiness from "../../assets/images/case-business.png"
import caseEducate from "../../assets/images/case-educate.png"
import caseInsights from "../../assets/images/case-insights.png"
import caseResponsive from "../../assets/images/case-responsive.png"

const Projects = () => {
  //skapa lista för att loopa ut varje artikel
  const projectListItems = [
    {
      image: caseBusiness,
      title: "Business Advice",
      url: "/projects/business /",
    },
    {
      image: caseEducate,
      title: "Educate Your Employees To Get Better Results",
      url: "/projects/eduation /",
    },
    {
      image: caseInsights,
      title: "Business Insights Is a Important Piece Of Your Business",
      url: "/projects/insights /",
    },
    {
      image: caseResponsive,
      title: "Why Your Client Needs a Responisve Website",
      url: "/projects/responsiveWebsite /",
    },
  ]

  return (
    <section className="case">
      <div className="container">
        <SectionTitle
          title="Project & Case Studies"
          description="Let's Looks Our Global Projects"
        />

        <div className="content-grid">
          {projectListItems.map((Item, index) => (
            <ProjectBox
              key={index}
              image={Item.image}
              title={Item.title}
              url={Item.url}
            />
          ))}
        </div>
        <div className="center-content">
          <Button type="black" title="All Recent Projects" url="/projects" className="fa-solid fa-arrow-up-right" />
        </div>
      </div>
    </section>
  )
}

export default Projects