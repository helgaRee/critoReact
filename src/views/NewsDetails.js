import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NewsArticles from '../components/GetApiData/NewsArticles';

const NewsDetails = () => {
  const [article, setArticle] = useState({});
  const [errorMessage, setErrorMessage] = useState()

  const { id } = useParams();

  // körs igång direkt när newsdetails-sidan öppnas. hämtning till url sker
  useEffect(() => {
    getArticle();
  }, []);

  // hämta artikeln
  const getArticle = async () => {
    // kontrollera att det ens finns ett värde. Finns det ett ID, kommer hämtning ske
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);

      // kontrollera status
      if (result.status === 200) {
        // sätter artikeln till result.json. Hittas inget resultat, skriv ut felmeddelande
        setArticle(await result.json());
      } else if (result.status !== 200) {
        setErrorMessage('Ingen artikel hittades')
      }
    }
  };

  return  (
    <div className="wrapper">
      <Header />
      <main>
        <p className="errorMessage">{errorMessage}</p>
        {/* Hämtar artiklarna från API */}
        {/* Hämta ut id-parametern!*/}
        <div className="title">{article.title}</div>
        <div className="title">{article.content}</div>
        <div className="title">{article.author}</div>
        <div className="title">{article.published}</div>
        <div className="title">{article.category}</div>
        <div className="title">{article.imageUrl}</div>
      </main>
      <Footer />
    </div>
    )
}

export default NewsDetails;
