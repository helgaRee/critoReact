import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsSection from '../components/NewsSection/NewsSection'
import NewsArticles from '../components/GetApiData/NewsArticles'
import Subscribe from '../components/SubscribeSection/Subscribe'

const News = () => {
  return (
    <div className="wrapper">
      
      <Header />
      <main>
          <NewsArticles />
          <NewsSection />
          <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default News