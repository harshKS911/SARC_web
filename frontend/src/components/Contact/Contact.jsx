import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a55d2828-b208-46cd-8567-8d43e55f5171");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  
  
  
  
    return (
    <div className='contact'>
        
      <div className="contact-col">
        <h3>Send us msg <img src={msg_icon} alt="" /></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur tempore iste modi, doloribus sed, voluptatum commodi laborum soluta nesciunt debitis consequatur enim!</p>
      <ul>
         <li><img src={mail_icon} alt="" />godonly769@gmail.com</li>
        <li><img src={phone_icon} alt=""/>91+3748394774</li>
         <li><img src={location_icon} alt=""/>uttar pradesh, India</li>
      </ul>
      </div>
    <div className="contact-col">
    <form onSubmit={onSubmit}>
    <label>Your name</label>
   <input  type="text"  name='name'  placeholder='Enter your name' required></input>
   <label>Phone Number</label>
 <input  type="tel" name='phone' placeholder='Enter your phone number' required/>
   
   <label>Write your msg here</label>
<textarea   name="message" rows='6'  placeholder='Enter your msg here'  required> </textarea>


<button type='submit'  className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
    </form>
   <span>{result}</span>
    </div>
    
    </div>
  )
}

export default Contact
