import "../../components/NavSection/NavSection.css"
import React from 'react'
// Hämtar hem NavLink
import { Link, NavLink } from 'react-router-dom'
import Button from '../Generics/Button'
import img_logotype from '../../assets/images/logotype.svg'

const toggleMenu = () => {
    //vid klick, ska menyn öppnas

}

const NavSection = () => {
  return (
    <section className="nav-section">
        <div className="container">
           <Link to='/' className="logotype">
               <img src={img_logotype} alt="crito logotype" />
           </Link>
           <button className="menu-bars" onClick={toggleMenu}>
               <i className="fa-solid fa-bars" aria-hidden="true"></i>
           </button>
           <div className="menu">
               <div className="top-menu">
                   <div className="contact-information">
                       <div className="content-box">
                           <a href="#">
                               <i className="contact-icon fa-solid fa-phone" aria-hidden="true"></i>
                               +46 (8) 121 470 50
                           </a>
                       </div>
                       <div className="content-box">
                           <a href="#">
                               <i className="contact-icon fa-regular fa-envelope" aria-hidden="true"></i>
                               info@crito.com
                           </a>
                       </div>
                       <div className="content-box last">
                           <a href="#">
                               <i className="contact-icon fa-solid fa-location-dot" aria-hidden="true"></i>
                               Sveavägen 31, 111 34 STOCKHOLM
                           </a>
                       </div>
                   </div>
                   {/* aria-label and title to show the title when hover */}
                   <div className="social-media">
                       <a aria-label="facebook" href="https://facebook.com" target="_blank">
                           <i className="social-media-icon fa-brands fa-facebook" aria-hidden="true" title="facebook"></i>
                       </a>
                       <a aria-label="Twitter" href="#https://twitter.com/" target="_blank">
                           <i className="social-media-icon fa-brands fa-twitter" aria-hidden="true" title="Twitter"></i>
                       </a>
                       <a aria-label="Instagram" href="https://instagram.com/" target="_blank">
                           <i className="social-media-icon fa-brands fa-instagram" aria-hidden="true" title="Instagram"></i>
                       </a>
                       <a aria-label="LinkedIn" href="https://linkein.com/" target="_blank">
                           <i className="social-media-icon fa-brands fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
                       </a>
                   </div>
               </div>

               <div className="main-menu">
                   <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/news">News</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
    
                    </ul>
                   </nav>
                   <Button type="yellow" title="Login" url="/login" className="fa-solid fa-arrow-up-right" />
               </div>
           </div>
       </div>
   </section>
  )
}

export default NavSection