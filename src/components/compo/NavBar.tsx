import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <div className="container" style={{userSelect: 'none'}}>
        <div className="navBar">
          <div className='logoClass'>
            <img src={logo} className='logo' alt="logo" />
            <div className="name">Innov8ture</div>
          </div>
          <div className='tabs'>
            <Link to='/home' className='tab'>Home</Link>
            <Link to='/about-us' className='tab'>About Us</Link>
            <Link to='/contact' className='tab'>Contact</Link>
            <Link to='/services' className='tab'>Services</Link>
          </div>
          <div className='btn'>
            <div className='btnTxt'>
              Call Us
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
