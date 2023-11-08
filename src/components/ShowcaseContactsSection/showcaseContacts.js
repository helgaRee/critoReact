import React from 'react'
import imgBackgroundLinesContacts from '../../assets/images/background-lines.svg'

const showcaseContacts = () => {
  return (
 <section className="showcase showcase-contacts">
            <img className="background-lines bg-lines-contacts" src={imgBackgroundLinesContacts} alt="" />
            <div className="container-contacts">
                <div className="content">
                    <h1 className="small-h1">Home Contact</h1>
                    <p className="large-p">Let's Connect</p>
                </div>
            </div>
        </section>
  )
}

export default showcaseContacts