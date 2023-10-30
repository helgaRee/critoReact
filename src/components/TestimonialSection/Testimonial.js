import React from 'react'
import SectionTitle from '../Generics/SectionTitle'
//IMAGES
import rating1 from '../../assets/images/rater-1.jpg'
import rating2 from '../../assets/images/rater-2.jpg'
import rating3 from '../../assets/images/rater-3.jpg'
import TestimonialBox from './TestimonialBox'

const Testimonial = () => {


    //skapa lista
    const ratings =[
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            image: rating1,
            title: "Cassandra Warren",
            subtitle: "Business Manager, Dorfus",
        },
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            image: rating2,
            title: "Amanda Tulling",
            subtitle: "Senior Developer, Square",
        },
        {
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
            image: rating3,
            title: "Jack Mcdogglas",
            subtitle: "Key Account Manager, Gobona",
        },
    ]


  return (
    <section className="testimonial">
    <div className="container border">
<SectionTitle title="Testimonial" description="What Our Client Says" />
        <article>

            {ratings.map((rating, index) => (
                <TestimonialBox 
                key= {index}
                description= {rating.description}
                image= {rating.image}
                title= {rating.title}
                subtitle= {rating.subtitle}
                />
            ))}
        </article>
        <div className="center-content">
            <a className="btn-black" href="projects.html">all reviews<i className="arrow-top-right fa-regular fa-arrow-up-right"></i>
            </a>
        </div>
    </div>
</section>
  )
}

export default Testimonial