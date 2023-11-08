// import NewsBox from './NewsBox'
import Button from '../../components/Generics/Button'
import React from 'react'
import SectionTitle from '../Generics/SectionTitle'

//Images
import imgArticle1 from '../../assets/images/article-1.png'
import imgArticle2 from '../../assets/images/article-2.png'
import imgArticle3 from '../../assets/images/article-3.png'
import ArticleBox from '../ArticleSection/ArticleBox'


const NewsSection = ({url, image, date, month, title, subtitle, description}) => {

    //Lista
    const articles = [
      {
         image: imgArticle1,
         date: '25',
         month: 'Mar',
         title: 'Business',
         subtitle: 'how to use digitalization in the classroom',
         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
      },
      {
          image: imgArticle2,
          date: '17',
          month: 'Mar',
          title: 'Business',
          subtitle: 'how to implement chat GPT in your projects',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '13',
          month: 'Mar',
          title: 'Business',
          subtitle: 'the guide to support modern CSS design',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '12',
          month: 'Mar',
          title: 'Business',
          subtitle: "why you need to implement the five S's",
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '07',
          month: 'Mar',
          title: 'Business',
          subtitle: 'get more involved with your end users',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '02',
          month: 'Mar',
          title: 'Business',
          subtitle: 'guided tour of our new head office in stockholm',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '28',
          month: 'Feb',
          title: 'Business',
          subtitle: 'using business intelligence to get insights into our business',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '18',
          month: 'Feb',
          title: 'Business',
          subtitle: 'apple har released new products. are they any good?',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       },
       {
          image: imgArticle3,
          date: '11',
          month: 'Feb',
          title: 'Business',
          subtitle: 'how to improve your teams and get a better result',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.',
       }
  ]


  return (

    <section className="articles-news">
    <div className="container">
        <div className="top-heading">
            {/* <h2>article & news</h2> */}
            <div className="top-row">
                {/* <h3>get every single articles & news</h3> */}
                <SectionTitle title="Article & News" description="Get Every Single Articles & News" />
                <Button type="" title="Browse Articles" url="/articles" className="fa-solid fa-arrow-up-right" />
            </div>
        </div>

        <div className="articles">

        {articles.map((article, index) => (
            <ArticleBox 
                key={index}
                url={article.url}
                image={article.image}
                date={article.date}
                month={article.month}
                title={article.title}
                subtitle={article.subtitle}
                description={article.description}
            />
        ))}

        </div>
    </div>
    <div className="dots">
        <span className="dot dot-active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
    </div>
</section>
  )
}

export default NewsSection

