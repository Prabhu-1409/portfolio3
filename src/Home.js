import React from 'react'
import './Home.css'
import Header from './Header'
import Content from './Content'
import Carousel from './Carousel'
import About from './About'
import Work from './Work'
import Education from './Education'

function Home() {
  return (
    <div className='home'>
      <Header></Header>
      <Content></Content>
      <Carousel></Carousel>
      <About></About>
      <Work></Work>
      <Education></Education>
    </div>
  )
}

export default Home
