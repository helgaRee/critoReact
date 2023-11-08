import Button from "../Generics/Button"
import React, { useState } from "react"

const ContactForm = () => {
  //Hämta information och skicka iväg, med UseState
  //registrerar VARJE fält för sig, inte det mest optimala, men det enklaste nu
  //useSTATE
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("false")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e) => {
    console.log(e.target.id)

    switch (e.target.id) {
      case "name":
        setName(e.target.value)
        setNameError(validateLength(e.target.value))
        break
      case "email":
        setEmail(e.target.value)
        setEmailError(validateLength(e.target - value))
        break
      case "message":
        setMessage(e.target.value)
        setMessage(validateLength(e.target.value))
        break
    }
  }

  const validateLength = (value) => {
    if (value.length < 1) {
      return true
    } else {
      return false
    }
  }

  //Bygg upp ett user-objekt

  //gör om till jsonobjekt

  //SKicka iväg formulär-informationen till API med FETCH. skicka/hämta. namnge result. konfigurera url
  //Get data

  //Berätta om du vill skicka eller hämta, ange metod!

  //Berätta att datan vi skickar är av JSON

  //Tala om formulärinforamtionen vi vill skicka

  //kontrollera felmeddelanden med if sats eller switch

  return (
    <section className="contact-form container">
      <h2>Leave us a message for any information</h2>
      <p className="errorMessage">{errorMessage}</p>
      {/* /sätter en onSumbit till formuläret, för att kunna SKICKA det vidare */}
      <form noValidate id="registerform" className="container mt-4">
        <div className="mb-3">
          <label className={`${nameError ? "errorMessage" : ""}`}>{`Namn ${
            nameError ? " måste anges" : ""
          }`}</label>
          <input
            onChange={(e) => handleChange(e)}
            value={name}
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            tabIndex="1"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            onChange={(e) => handleChange(e)}
            value={email}
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            tabIndex="2"
          />
        </div>
        <div className="mb-5">
          <label className="form-label">Meddelande:</label>
          <textarea
            onChange={(e) => handleChange(e)}
            value={message}
            className="form-input"
            name="message"
            id="message"
            placeholder="Your Message*"
          ></textarea>
        </div>
        <div className="d-grid pb-5">
          {/* <Button type="yellow" title="Send Message" className="fa-solid fa-arrow-up-right" /> */}
          <button className="btn btn-yellow" type="submit">
            Send Sessage
            <i className="arrow-top-right fa-regular fa-arrow-up-right"></i>
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
