import React from 'react'

//IMAGES
import imgWavyLinesLeft from '../../assets/images/wavy-lines-left.svg'
import imgAbout from '../../assets/images/Image-about.svg'
import SectionTitle from '../Generics/SectionTitle'
import Button from '../../components/Generics/Button'

const About = () => {
  return (

    <section className="about">
    <div className="container">

        <div className="founder">
            <img className="wavy-lines-left" src={imgWavyLinesLeft} alt="Wavy lines, design" />
            <img src={imgAbout} alt="Image of the Founder, Samantha Brown" />
            <div className="background-frame">
                <p>
                    <strong>Samantha Brown</strong>,
                    <span>Founder</span><br />
                    <br />"Lorem ipsum, dolor sit amet consectetur<br />
                    adipisicing elit."
                </p>
            </div>
        </div>
        <div className="content">
           <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />

            <div className="content-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p className="p-last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            </div>
            <div className="flex-row">
                <div className="btn-top">
                    <Button type="black" title="Learn More" className="fa-solid fa-arrow-up-right" />

                </div>
                <div className="btn-video">
                    <a className="btn-circle" href=" login.html">
                        <i className="fa-solid fa-caret-right"></i>
                    </a>
                    <p className="btn-txt-right">Intro Video</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About