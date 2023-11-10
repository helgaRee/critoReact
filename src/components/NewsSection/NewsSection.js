import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Generics/Button';
import SectionTitle from '../Generics/SectionTitle';
import NewsBox from '../NewsSection/NewsBox';

const NewsSection = () => {
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        try {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles');

            if (result.status === 200) {
                const data = await result.json();
                setArticles(data);
            } else {
                console.log(result.status, 'Fel vid hämtning av artiklar');
            }
        } catch (error) {
            console.log('Fel vid hämtning av artiklar');
        }
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <section className="articles-news">
            <div className="container">
                <div className="top-heading">
                    <div className="top-row">
                        <SectionTitle title="Artiklar & Nyheter" content="Få Varje Enstaka Artikel & Nyhet" />
                        <Button type="" title="Bläddra Artiklar" url="/articles" className="fa-solid fa-arrow-up-right" />
                    </div>
                </div>

                <div className="articles">
                    {articles.map((article) => (
                        <Link key={article.id} to={`/newsarticles/${article.id}`} className="article-list-link">
                            <NewsBox
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                content={article.content}
                                author={article.author}
                                published={article.published}
                                category={article.category}
                                imageUrl={article.imageUrl}
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
    );
};

export default NewsSection;