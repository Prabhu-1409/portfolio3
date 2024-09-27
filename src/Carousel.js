import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './Carousel.css'

function Carousel() {
  const [style,setstyle] = useState('card')
  const elements = [
    <Cards></Cards>,
    <Cards></Cards>,
    <Cards></Cards>,
    <Cards></Cards>,
    <Cards></Cards>
  ]
  const [index,setindex] = useState(0);
  const handleprev = () =>{
    if(index>0){
      setindex(index-1);
    }
  }
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setstyle('card')
  //   },5000)
  // },[style])
  const handlenext = () =>{
    if(index<elements.length-2){
       setindex(index+1);
    }
  }
  return (
    <div className='carousel'>
     <button className='carousel-button' onClick={()=>{setstyle('card-prev')
     setTimeout(()=>{
        setstyle('card')
     },2000)
     }}>Prev</button>
      <div className='gradient-left'></div>
      <div className='carousel-inner-container'>
        {/* <Cards></Cards> 
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards> */}
       
        {
          elements.map((item,i)=>{
              return(
                <Cards classname={style}></Cards>
              )
          })
        }
        </div> 
        <div className='gradient-right'></div>
        <button className='carousel-button' onClick={()=>{setstyle('card-next')
        setTimeout(()=>{
          setstyle('card')
        },2000)
        }}>Next</button>
    </div>
  )
}

export default Carousel
