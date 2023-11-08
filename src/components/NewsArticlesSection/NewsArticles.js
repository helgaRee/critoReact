import { useEffect, useState } from 'react'
// import SectionTitle from '../Generics/SectionTitle'
// import Button from '../Generics/Button'
// import NewsArticleBox from './NewsArticleBox'

const NewsArticles = () => {

    const [articles, setArticles] = useState([])
     //sätter initieringsvärdet till en tom array, då jag ska hämta ut en lista

//Med useEffect hämtar jag datan från api vid laddning av sidan
    useEffect(() => {
        getArticles()
    }, [])
//funktion som hämtar data ur API
    const getArticles = async () => {
        //hämta json-datan
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        //packetera upp json-datan
        const data = await result.json()
        setArticles(data)
    }

    
  


  return (
      <>
                <div className="articles">
        { //mappar ut datan från api
            articles.map(article => (
                <div className="article-item article content" key={article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.author}</p>
                    <p>{article.content}</p>
                    <p>{article.published}</p>
                    <p>{article.category}</p>
                    <p>{article.imageUrl}</p>
                </div>
        ))
    }

    </div>
    </>
  )
}

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






