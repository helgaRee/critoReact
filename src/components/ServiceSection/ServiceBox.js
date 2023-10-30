
import Button from '../Generics/Button'
import React from 'react'

//lägger till artiklar till ett objekt
const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
    <span></span>
    <h4>{title}</h4>
    <p>{description}</p>
    <a className="btn-circle" href={url}> <i className="fa-solid fa-arrow-right"></i>
    {/* <Button type="circle" title="" url="" />
    <i className="fa-solid fa-arrow-right"></i> */}
    </a>
</div>
  )
}

export default ServiceBox