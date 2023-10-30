import "../../App.css"
import React from 'react'


const Button = ({type, title, url}) => {

  const getButtonClassName = () => {
    switch(type) {
        case 'yellow':
            return 'btn-yellow'
        case 'black':
            return 'btn-black'
        case 'circle':
            return 'btn-circle'
        default: 
            return 'btn-transparent'
    }
  }

  
  



  return (
    <a className={getButtonClassName()} href={url}>
        {title}
        <i className="fa-solid fa-arrow-up-right"></i>
    </a>
  )
}

export default Button


