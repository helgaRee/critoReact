import React from "react"

const ContactInformationBox = ({ title, description, subdescription }) => {
  return (
    <a href="#">
      <div className="item item-1">
        <i className="fa-solid fa-location-dot"></i>
        <h3>{title}</h3>
        <p>
          {description}
          <span>{subdescription}</span>
        </p>
      </div>
    </a>
  )
}

export default ContactInformationBox
