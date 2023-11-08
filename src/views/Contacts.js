import React from 'react'

import Footer from '../components/Footer/Footer'
import NavSection from '../components/NavSection/NavSection'
import ShowcaseSection from '../components/ShowcaseContactsSection/showcaseContacts'
import ContactInformation from '../components/ContactInformationSection/ContactInformation'
import ContactForm from '../components/ContactFormSection/ContactForm'
import MapSection from '../components/MapSection/MapSection'

const Contacts = () => {
  return (
    <div className="wrapper">
      
      <NavSection />
      <ShowcaseSection />
      <main>
          <ContactInformation />
          <ContactForm />
          <MapSection />
      </main>
      <Footer />
    </div>
  )
}

export default Contacts