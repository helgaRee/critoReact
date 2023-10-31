import "../../App.css"
import React from 'react'


const Button = ({type, title, url, className}) => {

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
        <i className={className}></i>
    </a>
  )
}

export default Button


