import Button from "../../components/Generics/Button"
//Images
import imgArticle1 from "../../assets/images/article-1.png"
import imgArticle2 from "../../assets/images/article-2.png"
import imgArticle3 from "../../assets/images/article-3.png"
import ArticleBox from "./ArticleBox"
import { Link } from "react-router-dom"

const Articles = ({
  url,
  image,
  date,
  month,
  title,
  subtitle,
  description,
}) => {
  //Lista
  const articlesList = [
    {
      url: "/articles/digitalization /",
      image: imgArticle1,
      date: "25",
      month: "Mar",
      title: "Business",
      subtitle: "How To Use Digitalization in the classroom",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.",
    },
    {
      url: "/articles/chatgpt /",
      image: imgArticle2,
      date: "17",
      month: "Mar",
      title: "Business",
      subtitle: "How To Implement Chat GPT In Your Projects",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.",
    },
    {
      url: "/articles/supportcss /",
      image: imgArticle3,
      date: "13",
      month: "Mar",
      title: "Business",
      subtitle: "The Guide to Support Modern CSS Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.",
    },
  ]

  return (
    <section className="articles-news">
      <div className="container">
        <div className="top-heading">
          <h2>article & news</h2>
          <div className="top-row">
            <h3>get every single articles & news</h3>
            <Link to={`/news`}>
              <Button
                type=""
                title="Browse Articles"
                url="/articles"
                className="fa-solid fa-arrow-up-right"
              />{" "}
            </Link>
          </div>
        </div>

        <div className="articles">
          {articlesList.map((article, index) => (
            <Link to={`/news`} className="article-list-link" key={index}>
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
            </Link>
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

export default Articles
