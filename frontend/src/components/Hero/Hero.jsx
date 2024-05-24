import React from 'react'
import './Hero.css'
import  dark_arrow from '../../assets/dark-arrow.png'
import space from '../../assets/space3.mp4'

const Hero = () => {
  return (
    <div className='hero container'>  
       <video src={space}autoPlay loop muted/>
      <div className="hero-text">
      <h1>Welcome duplicate Sarc</h1>
      <p> This website is cheap copy of original ones. I am trying for SARC web coordi. </p>
    
      <button  className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
      




      </div>
    </div>
  )
}

export default Hero
