import React from 'react'

const FooterBox = ({title, url}) => {
  return (
    <div className="box box-2">
        <h4>{title}</h4>
        <a href="#">{url}</a>
        <a href="#">{url}</a>
        <a href="#">{url}</a>
        <a href="#">{url}</a>
    </div>
  )
}

export default FooterBox