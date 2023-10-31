import React from 'react'
import Button from '../Generics/Button'
import OurTeamBox from './OurTeamBox'
import SectionTitle from '../Generics/SectionTitle'
//IMAGES
import teamKristine from '../../assets/images/team-kristine.png'
import teamMark from '../../assets/images/team-mark.png'
import teamKimberly from '../../assets/images/team-kimberly.png'
import teamJustin from '../../assets/images/team-justin.png'


const OurTeam = () => {

//skapa en lista
const teams = [
    {
        image: teamKristine,
        title: "Kristine Palmer",
        description: "Chef Operation Officer",
    },
    {
        image: teamMark,
        title: "Mark Aubri",
        description: "Senior Consultant",
    },
    {
        image: teamKimberly,
        title: "Kimberly Hansen",
        description: "Senior Consultant",
    },
    {
        image: teamJustin,
        title: "Justin Willoman",
        description: "Senior Tech Consultant",
    },
    
]

  return (
    <section className="team">
    <div className="container">
        <div className="top-heading">
    <SectionTitle title="Meet Our Team" description="Experience Team Members" />
            <div className="top-row">
                <Button type="" title="Browse Team" url="/services" className="arrow-top-right fa-regular fa-arrow-up-right"/>
            </div>
        </div>
        <div className="content">
{/* Loopa igenom listan ovan ocg skriv ut */}

            {teams.map((team, index) => (
                < OurTeamBox
                key={index}
                image={team.image}
                title={team.title}
                description={team.description} 
                />

            ))}

        </div>
    </div>
    <div className="dots">
        <span className="dot"></span>
        <span className="dot dot-active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
    </div>
</section>
  )
}

export default OurTeam