import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//KOMPONENT FÖR satt hämta artiklar från API

const NewsArticles = () => {
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
  };


  //Skriv funktion för att formatera datum för 'oublished' som ex 25 mar, 2020
  const formatPublishedDate = (dateString) => {
      const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };

      return new Date(dateString).toLocaleString('sv-SE', options);
   }

  return (
    <div>NewsArticles</div>
  )
}

export default NewsArticles