import React from 'react'

const NewsBox = ({image, date, month, title, subtitle, description}) => {
  return (

        <article>
            <a className="link-no-style" href="#">
                    <img className="img-1" src={image} alt="A woman with long brown hair and wearing a blue suit, sitting on a chair next to a table, smiling" />
                    <div className="box-date">
                        <p>
                            <span>{date}</span>{month}
                        </p>
                    </div>
                    <div className="content">
                        <h4>{title}</h4>
                        <h5>{subtitle}</h5>
                        <p>{description}</p>
                    </div>
            </a>
        </article>

         
             
  )
}

export default NewsBox