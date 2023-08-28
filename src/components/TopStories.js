import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './TopStories.css'
import TopStoriesCard from './TopStoriesCard'
const TopStories = () => {
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
    <div><h2 className='top'>Top stories for you</h2></div>
    <div className="scrollable-container">
    <div className="button-containers">
    <button className='buttons'>All</button>
    <button className='buttons'>Android</button>
    <button className='buttons'>Cricket</button>
    <button className='buttons'>Iphone</button>
    <button className='buttons'>Google</button>
    </div>
    </div>
    <div className='card-grid'>
      
      {newsData.map((newsItem, index) => (
          <TopStoriesCard key={index} newsItem={newsItem} />
        ))}
      </div>
    </div>
  )
}

export default TopStories
