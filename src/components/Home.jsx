import React from 'react'
import Hero from './Hero.jsx/Hero'
import Service from './Service/Service'
import BannerDetails from './BannerDetails/BannerDetails'
import Banner from './Banner/Banner'
import Blogs from './Blogs/Blogs'
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
const Home = () => {
  return (
    <>
      <Hero />
        <Service />
        <BannerDetails reverse={true} img={Banner1} />
        <BannerDetails img={Banner2} />
        <Banner />
        <Blogs />
        </>
  )
}

export default Home
