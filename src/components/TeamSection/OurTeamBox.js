import React from 'react'

const OurTeamBox = ({image, title, description}) => {
  return (
    <div className="box">
        <img src={image} alt="" />
        <p>{title}</p>
        <p className="descr-txt">{description}</p>
    </div>
  )
}

export default OurTeamBox