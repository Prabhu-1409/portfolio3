import React from 'react'
import './Home.css'
import Header from './Header'
import Content from './Content'
import Carousel from './Carousel'

function Home() {
  return (
    <div className='home'>
      <Header></Header>
      <Content></Content>
      <Carousel></Carousel>
    </div>
  )
}

export default Home
