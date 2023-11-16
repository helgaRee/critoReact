import React from 'react';
import { Link } from 'react-router-dom';

const ArticleBox = ({ id, title, content, author, published, category, imageUrl }) => {
    return (
        
            <article className="article-item">
                <img className="img-1 articleImg" src={imageUrl} alt={`Bild för ${title}`} />
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
      
    );
};

export default ArticleBox;


