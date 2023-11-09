import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import SectionTitle from '../Generics/SectionTitle'
// import Button from '../Generics/Button'
// import NewsArticleBox from './NewsArticleBox'

const NewsArticles = () => {


    //sätter initieringsvärdet till en tom array, då jag ska hämta ut en lista
    const [articles, setArticles] = useState([])

//Med useEffect hämtar jag datan från api vid laddning av sidan
//I useEffect körs en funktion som heter getArticles
    useEffect(() => {
        getArticles()
    }, [])
//funktionen som hämtar artiklarna ur API
    const getArticles = async () => {
        //hämta json-datan
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        //packetera upp json-datan
        const data = await result.json()
        //Kontrollerar om statuskoden är lika med 200 OK, är den det, görs en lista av datan (useState)
        if (result.status === 200) {
            setArticles(data)
        }
    }

    
  


  return (
        <>
          <div className="articles container">
            {
                articles.map((article) => (
                <Link key={article.id} to={`/newsarticles/${article.id}`} className="article-item article content">
                    <h3 className="title">{article.title}</h3>
                    <p className='description p-content'>{article.content}</p>
                    <p className="author">{article.author}</p>
                    <p className="publish">{article.published}</p>
                    <p className="category">{article.category}</p>
                    <p className="article-image">{article.imageUrl}</p>
                </Link>
            ))}
          </div>
        </>
      );
    };

export default NewsArticles


//     <article>
//         <img className="img-1" src={image} alt={altText} />
//         <div className="box-date">
//             <p>
//                 <span>{date}</span>{month}
//             </p>
//         </div>
//         <div className="content">
//             <h4>{article.title}</h4>
//             <h5>{article.author}</h5>
//             <p>{article.content}</p>
//         </div>
//     </article>






