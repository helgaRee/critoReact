import React from 'react'

const SectionTitle = ({title, description}) => {
  return (
    <>
            <h2 className="section-title">{title}</h2>
            <h3>{description}</h3>
    </>
  )
}

export default SectionTitle