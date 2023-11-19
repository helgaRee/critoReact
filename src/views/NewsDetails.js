import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Articles from "../components/ArticleSection/Articles"
import Subscribe from "../components/SubscribeSection/Subscribe"

//KOMPONENT FÖR ENSKILD ARTIKEL

const NewsDetails = () => {
  const [article, setArticle] = useState({})
  const [errorMessage, setErrorMessage] = useState()

  //hämtar ut ID med react-hooken useParams
  const { id } = useParams()

  // körs igång direkt när newsdetails-sidan öppnas. hämtning till url sker
  useEffect(() => {
    getArticle()
  }, [])

  // hämta artikeln
  const getArticle = async () => {
    // kontrollera att det ens finns ett värde. Finns det ett ID, kommer hämtning ske. ID är definierat via PAram ovan
    if (id !== undefined) {
      try {
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
      } catch (error) {
        console.log("Error fetching article:", error)
      }
    }
  }
  //Skriv funktion för att formatera datum för 'published' som ex 25 mar, 2020
  const formatPublishedDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }

    return new Date(dateString).toLocaleString("sv-SE", options)
  }

  return (
    <div className="wrapper-news-details">
      <Header />
      <section className="wrapper container">
        <main className="article-main-left container">
          <div className="top-content">
            <p className="errorMessage">{errorMessage}</p>
            {/* Hämtar artiklarna från API */}
            {/* Hämta ut id-parametern!*/}
            <h3 className="article-title">{article.title}</h3>

            <div className="article-subtitles">
              {/* vid hämtning av article-published, anropas funktionen där det nya, returnerade värdet ersätter det ursprungliga värdet. */}
              <div className="article-published">
                {formatPublishedDate(article.published)}
              </div>
              <div className="article-category">{article.category}</div>
              <div className="article-author">{article.author}</div>
            </div>
          </div>

          <div className="article-image">
            {/* om article.imageUrl finns, visa img-tagg */}
            {article.imageUrl && (
              <img src={article.imageUrl} alt={article.title} />
            )}
          </div>
          <div className="article-content">{article.content}</div>
          <div className="keywords">
            <h6>Digitalization</h6>
            <h6>School</h6>
            <h6>IT</h6>
            <h6>Design</h6>
            <h6>Work</h6>
            <h6>Tech</h6>
          </div>
        </main>

        <div className="menu-right container">
          <div>
            <div className="searchbar-right">
              <i className="fa-solid fa-magnifying-glass"></i>{" "}
              <input
                className="searchbar"
                placeholder="Type to search..."
              ></input>
            </div>
          </div>

          <div className="menu-top border">
            <div className="content">
              <h3>
                <span className="underline">Rec</span>ent Posts
              </h3>
              <div className="item-post item1">
                <h4>how to blow through capital at an incredible rate</h4>
                <p>Jan 14, 2020</p>
              </div>
              <div className="item-post item2">
                <h4>design studios that everyone should know about</h4>
                <p>Jan 14, 2020</p>
              </div>
              <div className="item-post item3">
                <h4>
                  how did we get 1M+ visitors in 30 days without anything!
                </h4>
                <p>Jan 14, 2020</p>
              </div>
              <div className="item-post item4">
                <h4>figma on figma: how we built our website design system</h4>
                <p>Jan 14, 2020</p>
              </div>
            </div>
          </div>
          <div>
            <div className="menu-bottom border">
              <h3>
                <span className="underline">Cate</span>gories
              </h3>
              <h4>
                Technology -<span className="sub-text"> 20 Posts</span>
              </h4>
              <h4>
                Freelancing -<span className="sub-text"> 20 Posts</span>
              </h4>
              <h4>
                Writing -<span className="sub-text"> 20 Posts</span>
              </h4>
              <h4>
                Marketing -<span className="sub-text"> 20 Posts</span>
              </h4>
              <h4>
                Business -<span className="sub-text"> 20 Posts</span>
              </h4>
              <h4>
                Education -<span className="sub-text"> 20 Posts</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Articles />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default NewsDetails
