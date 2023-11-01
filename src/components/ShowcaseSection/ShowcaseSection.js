import Button from "../Generics/Button"
import "../../components/ShowcaseSection/ShowcaseSection.css"
import React from "react"
import img_showcase from "../../assets/images/Image-showcase.png"
import img_backgroundLines from "../../assets/images/background-lines.svg"

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <img className="background-lines" src={img_backgroundLines} alt="Background lines" />
      <div className="container">
        <div className="content content-left">
          <h1>We Provide The Best Business Solutions</h1>
          <p>
            Establish your vision and value proposition and turn them into
            testable prototypes.
          </p>
          <Button type="yellow" title="Get Consulting" url="/services/get-consulting" className="fa-solid fa-arrow-up-right" />
          <Button type="" title="Learn More" url="/services/consulting" className="fa-solid fa-arrow-up-right" />
        </div>
        <img
          className="img-showcase"
          src={img_showcase}
          alt="showcase image of a man in a suit with a tablet"
        />
      </div>
    </section>
  )
}

export default ShowcaseSection
