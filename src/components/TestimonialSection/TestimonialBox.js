import React from "react"

const TestimonialBox = ({ description, image, title, subtitle }) => {
  return (
    <div className="box">
      <div className="rating">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
      <p>{description}</p>
      <div className="rater">
        <img src={image} alt="" />
        <h5 className="name">{title}</h5>
        <p className="descr-txt">{subtitle}</p>
      </div>
    </div>
  )
}

export default TestimonialBox
