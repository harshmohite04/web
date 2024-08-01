import React from 'react'
import logo from '../../assets/img/logo.png'
import AboutUs from '../Page/AboutUs'
import './NavBar.css'

function NavBar() {
  return (
    <div>
      <div className="container">
      <div className="navBar">
        <div className='logoClass'>
          <img src={logo} className='logo'/>
          <div className="name">Innov8ture</div>
        </div>
        <div className='tabs'>
          <a href='../Page/Home.tsx' className='tab'>Home</a>
          <a href='../Page/AboutUs.tsx' className='tab'>About Us</a>
          <a href='../Page/Contact.tsx' className='tab'>Contact</a>
          <a href='../Page/Services.tsx' className='tab'>Services</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar
