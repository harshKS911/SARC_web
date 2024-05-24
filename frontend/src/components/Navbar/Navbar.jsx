import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/LOGO.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky,setSticky]= useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{

            window.scrollY>50 ? setSticky(true):setSticky(false);
        })
    },[]);

    return (

    <nav className={`container ${sticky ? 'dark-nav': ''}`}>
   <img src={logo} alt=""className='logo' />
<ul>
    <li><Link to='hero' smooth={true} offset={0} duration={500}   className='btn'>Home</Link></li>
    <li><Link to='programs' smooth={true} offset={-260} duration={500}className='btn' >Events</Link>   </li>
    <li> <Link to='about' smooth={true} offset={-150} duration={500} className='btn'>About us</Link>  </li>
    <li> <Link to='campus' smooth={true} offset={-260} duration={500}className='btn' > Gallery </Link>  </li>
    <li><Link to='testimonials' smooth={true} offset={-260} duration={500} className='btn' >Portfolios</Link>  </li>
<li><Link to='contact' smooth={true} offset={-260} duration={500}  className='btn'>Contact us</Link> </li>
</ul>
    </nav>
  )
}

export default Navbar
