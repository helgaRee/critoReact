import React from 'react'



const ChooseUsBox = ({url, image, title, description}) => {
  return (
   
    <div className="box">
        <a href={url}>
            <img src={image} alt="" />
        </a>
        <h4>{title}</h4>
        <p>{description}</p>
</div>
  )
}

export default ChooseUsBox