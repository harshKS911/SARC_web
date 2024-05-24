import React from 'react'
import './About.css'
import about_img from '../../assets/click.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
  <img src={about_img} alt="" className='about-img' />
  <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}  />
      </div>
   <div className="about-right">
<h3>About SARC</h3>


  <div>
<ul>

<li>Voluntary organization run by the students under the Dean ACR</li>


<li>Bridge the gap between the student and Alumni community</li>


<li>Execute alumni driven initiatives for the benefit of students</li>


<li>Create a synergy of ideas, respect and knowledge</li>
</ul>

</div>



   </div>

    </div>
  )
}
export default About 
