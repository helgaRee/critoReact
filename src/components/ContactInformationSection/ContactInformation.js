import React, { useState } from 'react'
import ContactInformationBox from './ContactInformationBox'

const ContactInformation = () => {



    const infoBoxes = [
        {
            title: 'Visit us',
            description: 'Sveavägen 31 111 34',
            subdescription: 'Stockholm'
        },
        {
            title: 'Call us',
            description: '+46 (8) 121 470 50  +46 (8) 121 470 51',
            subdescription: '',
        },
        {
            title: 'Email us',
            description: 'info@crito.com, support@crito.com',
            subdescription: '',
        }
    ]



    

  return (

    
    <section className="contact-information">
    <div className="container">

        
        {infoBoxes.map((infoBox, index) => (
            <ContactInformationBox
            key={index}
            title={infoBox.title}
            description={infoBox.description}
            subdescription={infoBox.subdescription}
            />
        ))}



    </div>
</section>
  )
}

export default ContactInformation