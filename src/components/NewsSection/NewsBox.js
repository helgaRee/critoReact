import React from 'react';

const ArticleBox = ({ id, title, content, author, published, category, imageUrl }) => {
    return (
        <a className="link-no-style" href={`/newsarticles/${id}`}>
            <article className="article-item">
                <img className="img-1" src={imageUrl} alt={`Bild för ${title}`} />
                <div className="box-date box-date-article">
                    <p className="content-date-article">
                        <span>{new Date(published).getDate()}</span>
                        {new Date(published).toLocaleString('default', { month: 'short' })}
                    </p>
                </div>
                <div className="content content-box-article">
                    <h3 className="title-business">{category}</h3>
                    <h4 className="title-article">{title}</h4>
                    <h5 className="subtitle-article">{author}</h5>
                    <p className="content-article">{content}</p>
                </div>
            </article>
        </a>
    );
};

export default ArticleBox;
