import React from "react"
import { NavLink } from "react-router-dom"

const Mobilmenu = () => {
  return (
    <div className="mobile-menu">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </div>
  )
}

export default Mobilmenu
