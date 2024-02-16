import React, { useState } from 'react';
import Logo from './images/logo.png';
import placeholder from './images/pfp-placeholder.jpeg';
import './App.css';
import calendar from './images/calendar.png';
function App() {
  

  return (
    <>
      
      <nav className="navbar"></nav>
     <nav className='sidebar'></nav>
      <a href="/"><img src={placeholder} alt="" className="profile" /></a>
      <a href=""><img src={Logo} alt="" className="logo" /></a>
    
      <label className='bg-sidebar'>
     
      <a href='/' className='calendar'> Calendar </a>
     <img className='calendarpic' src={calendar}></img>
     
      
      
      </label>





    </>
  )
}

export default App
