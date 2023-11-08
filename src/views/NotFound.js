import React from 'react'
import Footer from '../components/Footer/Footer'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    
    <h1>404 Page Not Found</h1>
    <p>Unable to find the page that you are looking for.</p>
    <Link to='/' className="btn-yellow btn">Go Back To The Beginning</Link>

    <Footer />
    </>
  )
}

export default NotFound