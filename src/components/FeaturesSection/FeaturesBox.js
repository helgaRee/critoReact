import React from 'react'
//importera IMG
import icon_handshake from '../../assets/images/Icon-handshake.svg'

const FeaturesBox = ({icon, title, description}) => {
  return (


    <div className="features-box">
        <img src={icon} alt="icon of a handshake" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>

  )
}

export default FeaturesBox