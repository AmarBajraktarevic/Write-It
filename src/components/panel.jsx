import React from 'react';
import Logo from '../images/logo.png';
import placeholder from '../images/pfp-placeholder.jpeg';
import calendar from '../images/calendar.png';
import '../App.css'


function Panel() {
  return (
    <div>
      <nav className="navbar"></nav>
      <nav className='sidebar'></nav>
      <a href="/"><img src={placeholder} alt="" className="profile" /></a>
      <a href=""><img src={Logo} alt="" className="logo" /></a>
      <label className='bg-sidebar'>
        <a href='/calendar' className='calendar'> Calendar </a>
        <img className='calendarpic' src={calendar} alt="calendar" />
      </label>
    </div>
  );
}

export default Panel;
