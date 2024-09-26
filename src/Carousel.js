import React from 'react'
import Cards from './Cards'
import './Carousel.css'

function Carousel() {
  return (
    <div className='carousel'>
      <div className='gradient-left'></div>
      <div className='carousel-inner-container'>
        <Cards></Cards> 
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        </div> 
        <div className='gradient-right'></div>
    </div>
  )
}

export default Carousel
