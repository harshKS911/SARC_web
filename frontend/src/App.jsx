import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Events from './components/Events';


const App = () => {

  const [playState,setPlayState]= useState(false);

  return (
   
<Router> 
 <div className="App">
      <Navbar/>
    
      
            <Events />
      <Hero/>
      <div className="container">
        <Title subTitle='Our Events' title='What do we do?'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Captures'/>
      <Campus/>
      <Title subTitle='Portfoilios' title='Who are we?'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer  playState={playState} setPlayState={setPlayState}  />
  
    </div>
    </Router>
  
    
  )
}

export default App
