import React from 'react';
import './TopStoriesCard.css'; 

const TopStoriesCard = ({ newsItem }) => 
{
  return (
    <a
      href={newsItem.url}
      target="_blank" 
      className="link"
      rel="noopener noreferrer"
    >
    <div className="horizontal-card">
        <div className="card-content">
        <h2 className="card-title">{newsItem.title}</h2>
        <p className="card-description">{newsItem.description}</p>
        <p className='card-author'>{newsItem.author}</p>
       
        </div>
      <div className="card-image">
        
      <img src={newsItem.urlToImage} alt={newsItem.title} />
      </div>
    </div>
   </a>
    
  );
};

export default TopStoriesCard;
