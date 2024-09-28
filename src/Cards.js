import React, { useState } from 'react'
import './Cards.css'
import abstract from './image/abstract.jpg'

function Cards({classname}) {
  console.log("classname==>",classname)
  return (
    // <div className='card'>
    <div className={`${classname}`}>
        <img className='card-image' src={abstract}></img>
        <div className='card-details'>
        <div className='card-topic'>
        <h4>Card Topic</h4>
        </div>
        <p className='card-content'>The Git “Your local changes to the following files would be overwritten by checkout” error occurs when you make changes on two branches </p>
        </div>
    {/* </div> */}
    </div>
  )
}

export default Cards
