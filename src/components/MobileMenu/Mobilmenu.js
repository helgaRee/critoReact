import React from 'react'
import {  NavLink} from 'react-router-dom'

const Mobilmenu = () => {
  return (

    <div className="mobile-menu">
    <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/services">Services</NavLink>
         <NavLink to="/news">News</NavLink>
         <NavLink to="/contacts">Contacts</NavLink>
    </nav>
    {/* <Button type="yellow" title="Login" url="/login" className="fa-solid fa-arrow-up-right" /> */}
</div>
  )
}

export default Mobilmenu