import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

//KOMPONENT FÖR ENSKILD ARTIKEL

const NewsDetails = () => {
  const [article, setArticle] = useState({})
  const [errorMessage, setErrorMessage] = useState()
  //hämtar ut ID med react-hooken useParams
  const { id } = useParams()

  // förenklat beskrivet:
  // const params = useParams()
  // const id = params.id

  // körs igång direkt när newsdetails-sidan öppnas. hämtning till url sker
  useEffect(() => {
    getArticle()
  }, [])

  // hämta artikeln
  const getArticle = async () => {
    // kontrollera att det ens finns ett värde. Finns det ett ID, kommer hämtning ske. ID är definierat via PAram ovan
    if (id !== undefined) {
      const result = await fetch(
        `https://win23-assignment.azurewebsites.net/api/articles/${id}`
      )

      // kontrollera status
      if (result.status === 200) {
        // sätter artikeln till result.json. Hittas inget resultat, skriv ut felmeddelande
        setArticle(await result.json())
      } else if (result.status !== 200) {
        setErrorMessage("Ingen artikel hittades")
      }
    }
  }

  return (
    <div className="wrapper-news-details">
      <Header />
      <main className="article-main-left">
        <p className="errorMessage">{errorMessage}</p>
        {/* Hämtar artiklarna från API */}
        {/* Hämta ut id-parametern!*/}
        <div className="article-title">{article.title}</div>
        <div className="article-content">{article.content}</div>
        <div className="article-subtitles">
          <div className="article-published">{article.published}</div>
          <div className="article-category">{article.category}</div>
          <div className="article-author">{article.author}</div>
        </div>
        <div className="article-imageUrl">{article.imageUrl}</div>
      </main>



      <section className="menu-right">
        <div className="searchbar-right border">searchbar</div>

        <div className="menu-top border">menu-top</div>
        <div className="menu-bottom border">menu-bottom</div>
      </section>
      <Footer />
    </div>
  )
}

export default NewsDetails
