import { Link } from 'react-router-dom'
import Button from '../../components/Generics/Button'
import React from 'react'

const Subscribe = () => {
  

  return (
    <section className="subscribe">
    <img src="images/background-wavy-lines.svg" alt="" className="background-wavy-lines" />
    <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form className="input-box">
            <input type="text" placeholder="username@domain.com" />
           <Link to={'/contacts'}>
           <Button type="yellow" title="Subscribe" className="fa-solid fa-arrow-up-right" /> 
            </Link> 
        </form>
    </div>
</section>
  )
}

export default Subscribe