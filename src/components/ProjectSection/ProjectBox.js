import React from 'react'
import Button from '../Generics/Button'

const ProjectBox = ({image, title, url, className}) => {
  return (
    <div className="box box-1">
    <img src={image} alt="A mans hands reading a business paper" />
    <h4>{title}</h4>
    <Button type="" title="Read More" url="/readMore" className="fa-regular fa-arrow-up-right"/>
</div>
  )
}

export default ProjectBox


