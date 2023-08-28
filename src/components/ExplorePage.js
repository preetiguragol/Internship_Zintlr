
import React, { useEffect, useState } from 'react';
import './ExplorePage.css';
import axios from 'axios';

const ExplorePage = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = process.env.React_App_NewsApi2;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then(response => {
        setNewsData(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  return (
    <div className='whole'>
    <div className="vertical-carousel">
      {newsData.map((newsItem, index) => (
        
          <a
          href={newsItem.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="cricketcard"
        >
          <img
            className="verticalimg"
            src={newsItem.urlToImage}
            alt={newsItem.title}
          ></img>
          <h3 className="cricket">{newsItem.title}</h3>
          <p className="cricketdes">{newsItem.description}</p>
        </a>
    
      ))}
    </div>
    </div>
  );
};

export default ExplorePage;
