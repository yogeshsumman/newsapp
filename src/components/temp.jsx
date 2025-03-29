import React from 'react';
import { ExternalLink } from 'lucide-react'; // Install with: npm install lucide-react

const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
  const defaultImage = "https://www.searchenginejournal.com/wp-content/uploads/2023/06/img_2023-6-28-000706-649bb212ea6ce-sej.jpeg";
  
  return (
    <div className="news-card">
      <div className="news-image-container">
        <img 
          className="news-image" 
          src={imageUrl || defaultImage} 
          alt="News thumbnail" 
        />
        <div className="image-overlay"></div>
      </div>
      <div className="news-content">
        <h3 className="news-title">{title || "Breaking News"}...</h3>
        <p className="news-description">{description || "Click to read more about this story"}...</p>
        
        <div className="news-footer">
          <div className="news-date">
            <span>Just now</span>
          </div>
          <a 
            href={newsUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="read-more-btn"
          >
            <span>Read</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;