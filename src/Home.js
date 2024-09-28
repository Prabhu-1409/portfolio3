import React from 'react'
import './Home.css'
import Header from './Header'
import Content from './Content'
import Carousel from './Carousel'
import About from './About'

function Home() {
  return (
    <div className='home'>
      <Header></Header>
      <Content></Content>
      <Carousel></Carousel>
      <About></About>
    </div>
  )
}

export default Home
