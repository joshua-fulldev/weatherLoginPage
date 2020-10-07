import React from 'react';
import tradepic from './hexagonal.png';
import './App.css'


function Logo() {
  return (
    <div className="MyLdiv">
      <a href="https://www.google.com"
       target="_blank"
       rel="noopener noreferrer">
      <img src={tradepic} alt="logo" className="MyLogo"/>
      </a>
    </div>
  )
}

export default Logo;
