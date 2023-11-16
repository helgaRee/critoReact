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
        <div className="content-article">
            <h3 className="title-business">{title}</h3>
            <h4 className="title-article">{subtitle}</h4>
            <p>{description}</p>
        </div>
    </article>
</a>


  )
}

export default ArticleBox