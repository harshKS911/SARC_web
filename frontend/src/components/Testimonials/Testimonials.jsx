import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/dev.png'
import user_2 from '../../assets/media.png'
import uops from '../../assets/ops.png'
import design from '../../assets/design.png'
import  mar from '../../assets/market.png'
import   hda from '../../assets/hda.png'
import   asmp from '../../assets/asmp.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

const slider= useRef();
let tx=0;

const slideForward=()=>{
  if(tx>-75){
   tx-=15;
  }
slider.current.style.transform= `translateX(${tx}%)`
}
const slideBackward=()=>{
  if(tx<0){
    tx+= 15;
  }
  slider.current.style.transform=`translateX(${tx}%)`
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
       <div className="slider">
       <ul ref={slider}>
          <li>
           <div className="slide">
             <div className="user-info">
                <img src={user_1} alt="" />
     <div>
       <h3> WEB </h3>
       <span> SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The web team is responsible for building all the portals (including the one you are looking at right now) websites , app and much more of SARC..</p>


           </div>


          </li>

          <li>
           <div className="slide">
             <div className="user-info">
                <img src={user_2} alt="" />
     <div>
       <h3>MEDIA & PR </h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>Media & PR is the face of SARC for Student and Alumni bodies. Managing all the social media accounts of SARC, ideating the themes and publicity strategies of various events and conducting the interviews of alumni comes under us.
</p>


           </div>


          </li>

          <li>
           <div className="slide">
             <div className="user-info">
                <img src={uops} alt="" />
     <div>
       <h3>OPERATIONS</h3>
       <span>SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The operations team’s main responsibility is to manage the end-to-end execution of various events throughout the year. This includes everything from budget planning to event implementation.</p>


           </div>


          </li>
          <li>
           <div className="slide">
             <div className="user-info">
                <img src={mar} alt="" />
     <div>
       <h3>MARKETING</h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The primary task of the Marketing portfolio would be achieving sponsorships for SARC events, crafting persuasive pitches and fostering long-lasting collaborations</p>


           </div>


          </li>
          <li>
           <div className="slide">
             <div className="user-info">
                <img src={design} alt="" />
     <div>
       <h3> DESIGN </h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>Design is thinking made visual. The design team is responsible for all the publicity work through Branding, posters and invites, flexes and event videos, brochures and handbooks</p>


           </div>


          </li>


          <li>
           <div className="slide">
             <div className="user-info">
                <img src={asmp} alt="" />
     <div>
       <h3> ASMP </h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The ASMP team is responsible for managing the entire process of allocation of 350+ mentors with 600+ mentees along with the ideation, and execution of events for enhancing the mentor-mentee interaction.</p>


           </div>


          </li>

          <li>
           <div className="slide">
             <div className="user-info">
                <img src={user_4} alt="" />
     <div>
       <h3>EVENTS </h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The Events portfolio serves as a vital link between the extensive alumni network of IIT Bombay and its students. Our core expertise lies in ideating, envisioning and implementing fresh and impactful events.</p>


           </div>


          </li>
          <li>
           <div className="slide">
             <div className="user-info">
                <img src={hda} alt="" />
     <div>
       <h3>HDA </h3>
       <span>  SARC, IIT Bombay</span>


     </div>
             </div>
  <p>The portfolio serves as a crucial link between the various Department and Hostel councils within the Institute through its dedicated Alumni Secretaries.</p>



           </div>


          </li>

       </ul>
    </div>
  </div>
  )
}

export default Testimonials
