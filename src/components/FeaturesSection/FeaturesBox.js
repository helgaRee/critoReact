import React from "react"

const FeaturesBox = ({ icon, title, description }) => {
  return (
    <div className="features-box">
      <img src={icon} alt="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeaturesBox
