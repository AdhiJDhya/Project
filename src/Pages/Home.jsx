import React from 'react'
import Popular from '../Componenets/Popular/Popular'
import Hero from '../Componenets/Hero/Hero'
import NewsLetter from '../Componenets/NewsLetter/NewsLetter'
import Footer from '../Componenets/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
