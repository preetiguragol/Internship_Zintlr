import React from 'react'
import NewsItems from './NewsItems'
import TopStories from './TopStories'
import Header from './Header'
import Explore from './Explore'
const Main = () => {
  return (
    <div>
        <Header />
        <NewsItems />
        <TopStories />
        <Explore/>
    </div>
  )
}

export default Main