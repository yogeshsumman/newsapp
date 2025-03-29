import React, { useState, useEffect, useContext } from "react";
import NewsItem from "./NewsItem";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ThemeContext } from "../context/ThemeContext";
import "./Style.css"
// New component for category buttons
const CategoryButton = ({ category, active, onClick }) => (
  <button
    onClick={onClick}
    className={`category-btn ${active ? 'active' : ''}`}
  >
    {category}
  </button>
);

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState(props.category);
  const { darkMode } = useContext(ThemeContext);

  const categories = [
    'business', 'entertainment', 'general', 
    'health', 'science', 'sports', 'technology'
  ];

  const fetchNews = async (pageNum = 1, category = props.category) => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=101eb971f1db435aa6297600f8c25120&page=${pageNum}&pageSize=${props.pagesize}`;
    
    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      setArticles(parsedData.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    setActiveCategory(props.category);
  }, [props.category, props.pagesize]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPage(1);
    fetchNews(1, category);
  };

  const handlePreviousClick = () => {
    const newPage = page - 1;
    setPage(newPage);
    fetchNews(newPage, activeCategory);
  };

  const handleNextClick = () => {
    const newPage = page + 1;
    setPage(newPage);
    fetchNews(newPage, activeCategory);
  };

  return (
    <div className={`news-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="news-header">
        <h2 className="news-heading">Today's Top Headlines</h2>
        
        <div className="categories-container">
          {categories.map((category) => (
            <CategoryButton 
              key={category}
              category={category.charAt(0).toUpperCase() + category.slice(1)}
              active={category === activeCategory}
              onClick={() => handleCategoryChange(category)}
            />
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="news-grid">
            {articles && articles.length > 0 ? (
              articles.map((element) => (
                <div key={element.url} className="news-item-container">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 65) : ""}
                    description={element.description ? element.description.slice(0, 120) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              ))
            ) : (
              <div className="no-articles">
                No articles found. Try another category or check back later.
              </div>
            )}
          </div>
          
          <div className="pagination-controls">
            <button 
              disabled={page <= 1} 
              className={`pagination-btn prev-btn ${page <= 1 ? 'disabled' : ''}`} 
              onClick={handlePreviousClick}
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>
            <div className="page-indicator">Page {page}</div>
            <button
              disabled={articles.length < props.pagesize}
              className={`pagination-btn next-btn ${articles.length < props.pagesize ? 'disabled' : ''}`}
              onClick={handleNextClick}
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default News;