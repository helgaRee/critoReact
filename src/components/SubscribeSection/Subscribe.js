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
            <Button type="yellow" title="Subscribe" className="fa-solid fa-arrow-up-right" />
        </form>
    </div>
</section>
  )
}

export default Subscribe