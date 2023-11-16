import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Generics/Button';
import SectionTitle from '../Generics/SectionTitle';
import NewsBox from '../NewsSection/NewsBox';

//KOMPONENT FÖR NEWS PAGE

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
                    <h3 className="section-subtitle">Our News & Articles</h3>
                </div>

                <div className="articles">
                    {articles.map((article) => (
                        <Link key={article.id} to={`/newsdetail/${article.id}`} className="article-list-link">
                            <NewsBox
                                key={article.id}
                                id={article.id}
                                title={article.title}
                                content={article.content}
                                // author={article.author}
                                published={article.published}
                                category={article.category}
                                imageUrl={article.imageUrl}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="next-page">
                <a href="#" className="previous link-no-style"><i className="fa-solid fa-chevron-left"></i></a>
                <a href="#" className="page-number page-number-one link-no-style">1</a>
                <a href="#" className="page-number link-no-style">2</a>
                <a href="#" className="page-number link-no-style">3</a>
                <a href="#" className="page-number link-no-style">...</a>
                <a href="#" className="page-number link-no-style">9</a>
                <a href="#" className="next link-no-style"><i className="fa-solid fa-chevron-right"></i></a>
            </div>
        </section>
    );
};

export default NewsSection;