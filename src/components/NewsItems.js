import React from 'react'
import './NewsItems.css'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const NewsItems = ({}) => {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1.5
        }
      };
      const [newsData, setNewsData] = useState([]);
  
  useEffect(() => {
    const apiKey = process.env.React_App_NewsApi2;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setNewsData(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news data:', error);
      });
  }, []);
      
  return (
    <div>
    <Carousel responsive={responsive}>
    {newsData.map((newsItem, index) => (
        <a
        href={newsItem.url}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
        className="cricketcard"
      >
        <img
          className="cricketimg"
          src={newsItem.urlToImage}
          alt={newsItem.title}
        ></img>
        <h3 className="cricket">{newsItem.title}</h3>
        <p className="cricketdes">{newsItem.description}</p>
      </a>
    ))}
    </Carousel>
    </div>
  )
}

export default NewsItems

