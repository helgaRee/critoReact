import Button from "../Generics/Button"
import React, { useState } from "react"

const ContactForm = () => {
  //Hämta information och skicka iväg, med UseState
  //registrerar VARJE fält för sig, inte det mest optimala, men det enklaste nu
  //useSTATE
const [name, setName] = useState('')
const [nameError, setNameError] = useState(false)
const [email, setEmail] = useState('')
const [emailValid, setEmailValid] = useState(true) //variabel för att hålla koll på email-valideringen
const [emailError, setEmailError] = useState(false)
const [message, setMessage] = useState('')
const [messageError, setMessageError] = useState(false)
const [errorMessage, setErrorMessage] = useState('')
const [succesMessage, setSuccesMessage] = useState('')


const handleChange = (e) => {
  console.log(e.target.type)

  switch (e.target.name) {
    case 'name':
        setName(e.target.value) //SÄTTER VÄRDET
        setNameError(validateLength(e.target.value))  //VALIDERAR VÄRDET
        break;
    case 'email':
        setEmail(e.target.value) //SÄTTER VÄRDET
        setEmailValid(validateEmail(e.target.value)) //VALIDERAR VÄRDET
        break;
    case 'message':
        setMessage(e.target.value) //SÄTTER VÄRDET
        setMessageError(validateLength(e.target.value)) ///VALIDERAR VÄRDET
        break;
  }
}


//FUNKTION SOM VALIDERAR VÄRDET SOM FÖLJER MED IN.
const validateLength = (value, minLength=2) => {
  if (value.length < minLength) {
    return true;
  } else {
    return false;
  }
}

//VALIDERA EMAIL MED REGEX
const validateEmail = (value, minLength=3) => {
  // Ett regex-uttryck för e-postvalidering
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) && value.length > minLength) {
      return true; 
  } else {
    return false;
  }

}


const handleForm = async (e) => {
    //om fälten lämnas tomma, skriv ut felmeddelande till p 
    e.preventDefault()
    //RENSAR FELMEDDELANDET FRÅN FÖRSTA BÖRJAN
    setErrorMessage('')

    
    
    for(let element of e.target) {
      switch (element.name) {
        case 'name':
          setName(element.value) //SÄTTER VÄRDET
          setNameError(validateLength(element.value))  //VALIDERAR VÄRDET
          break;
          case 'email':
            setEmail(element.value) //SÄTTER VÄRDET
            setEmailValid(validateEmail(element.value)) //VALIDERAR VÄRDET
          break;
          case 'message':
            setMessage(element.value) //SÄTTER VÄRDET
            setMessageError(validateLength(element.value)) ///VALIDERAR VÄRDET
            break;
          }
        }
        //ifsats för att skicka iväg formuläret OM inga fel finns
        if (!nameError && !emailError && !messageError) {
          //om alla errors är false, alltså finns inga fel, gör en await och skicka med fetch
          const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              name, email, message
      })
    })
    
    //ifsats för felmeddelanden
    if (result.status === 200) {
      //sätt meddelande till succesMessage samt rensa formuläret om ivägskickat till api
      setSuccesMessage('Formuläret har skickats iväg!')
      setName('')
      setEmail('')
      setMessage('')
      console.log(result.status) //kontroll
      
    } else if (nameError || emailError || messageError) {
      setErrorMessage('Hmm, något gick fel.. du verkar inte fyllt i alla fält.')
      console.log(result.status) //kontroll
    } else {
      setErrorMessage('Hmm, något gick fel..')
      console.log(result.status) //kontroll
    }
  }
  
  //räkna antalet ifyllda fält
    const filledFields = [name, email, message].filter(field => field.trim() !== '');

    //om endast 1 fält är ifyllt, sätt specifikt meddelande
    if (filledFields.length < 3) {
        setErrorMessage('Du måste fylla i alla fält.');
    }
}

  

  return (
    <section className="contact-form container">
      <h2>Leave us a message for any information</h2>
{/* OM errorMessage är true, add className errorMessage, om falskt add className succesMessage */}
      <p className={`${errorMessage ? 'errorMessage' : 'succesMessage'}`}>
                    {errorMessage}{succesMessage}
      </p>
{/* /sätter en onSumbit till formuläret, för att kunna SKICKA det vidare */}
      <form 
        onSubmit={handleForm}
        noValidate
        id="registerform"
        className="container mt-4"
      >
        <div className="mb-3">
          <label className={`${nameError ? 'errorMessage' : ''}`}>{`Namn ${nameError ? ' måste anges med minst 2 tecken': ''}`}</label>
          <input
          onChange={e => handleChange(e)}
          value={name}
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            tabIndex="1"
          />
        </div>
        <div className="mb-3">
          <label className={`${emailValid ? '' : "errorMessage"}`}> {`Din Email ${emailValid ? '' : ' måste vara giltig '}`}</label>
          <input
          onChange={(e) => handleChange(e)}
          value={email}
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            tabIndex="2"
          />
        </div>
        <div className="mb-5">
          <label className={`${messageError ? 'errorMessage' : ""}`}> { `${messageError ?  'Glöm inte att lämna ett meddelande' : ""}`}</label>
          <textarea
          onChange={(e) => handleChange(e)}
          value={message}
            className="form-input"
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="d-grid pb-5">
          {/* <Button type="yellow" title="Send Message" className="fa-solid fa-arrow-up-right" /> */}
          <button className="btn btn-yellow" type="submit">
            Send Message
            <i className="arrow-top-right fa-regular fa-arrow-up-right"></i>
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
