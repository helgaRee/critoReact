import React from 'react'

const ArticleBox = ({url, image, date, month, title, subtitle, description}) => {
  return (


    <a className="link-no-style" href={url}>
    <article>
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
    </article>
</a>


  )
}

export default ArticleBox