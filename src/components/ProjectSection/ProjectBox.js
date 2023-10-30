import React from 'react'
import caseBusiness from '../../assets/images/case-business.png'
import Button from '../Generics/Button'

const ProjectBox = ({image, title, url}) => {
  return (
    <div className="box box-1">
    <img src={image} alt="A mans hands reading a business paper" />
    <h4>{title}</h4>
    <Button type="" title="Read More" url="/readMore" />
    {/* <a className="btn-transparent" href={url}>read more<i className="fa-regular fa-arrow-up-right"></i>
    </a> */}
</div>
  )
}

export default ProjectBox


