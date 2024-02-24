import React, { useState } from 'react';
import Logo from '../images/logo.png';
import placeholder from '../images/pfp-placeholder.jpeg';
import calendar from '../images/calendar.png';
import arrowr from '../assets/arrowr.svg'; // assuming arrow.png is the image for previous month
import arrowl from '../assets/arrowl.svg'; // assuming revarrow.png is the image for next month
import backto from '../assets/back.svg'

import './calendar.css';

function Panel() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthLabels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const nextMonth = () => {
    setCurrentDate(prevDate => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
      nextMonthDate.setDate(1); // Set to 1st day of the month
      return nextMonthDate;
    });
  };

  const prevMonth = () => {
    setCurrentDate(prevDate => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
      prevMonthDate.setDate(1); // Set to 1st day of the month
      return prevMonthDate;
    });
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  const monthLabel = monthLabels[currentDate.getMonth()];
  const yearLabel = currentDate.getFullYear();

  const generateCalendarGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayOfMonth = new Date(year, month, 1).getDay();
    const dates = [];

    // Fill in the dates of the previous month if necessary to align start day
    for (let i = startDayOfMonth; i > 0; i--) {
      dates.push(new Date(year, month, -i + 1));
    }

    // Fill in the dates of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, month, i));
    }

    // Map through the dates array to render the calendar grid
    return dates.map((date) => {
      const isCurrentDay = date.toDateString() === currentDate.toDateString();
      const classNames = isCurrentDay ? 'current-day' : '';
      return (
        <div key={date.toISOString()} className={classNames}>
          <span>{date.getDate()}</span>
        </div>
      );
    });
  };

  return (
    <div className="panel-container">
      <nav className="navbar"></nav>
      <nav className='sidebar'></nav>
      <a href="/"><img src={placeholder} alt="" className="profile" /></a>
      <a href=""><img src={Logo} alt="" className="logo" /></a>
      <label className='bg-sidebar'>
        <a href='/calendar' className='calendar'> Calendar </a>
        <img className='calendarpic' src={calendar} alt="calendar" />
      </label>
      
        <div className="date-container">
        <div className="date-labels">
      <div className="label date-label">{dayLabels[currentDate.getDay()]},</div>
      <div className="label date-label">{monthLabel}</div>
      <div className="label date-label">{currentDate.getDate()},</div>
     <div className="label date-label">{yearLabel}</div>
       </div>
        </div>

     
      <div className="calendar-plan">
        <p className='day-labels'>{dayLabels.join(' ')}</p>
        {generateCalendarGrid()}
      </div>
      <div className="button-container">
  <div onClick={nextMonth}>
    <img className='arrowr' src={arrowr} alt="Next Month" />
  </div>
  <div onClick={prevMonth}>
    <img className='arrowl' src={arrowl} alt="Previous Month" />
  </div>
  <div onClick={goToCurrentMonth}>
    <img className='backto' src={backto} alt="Back to Month" /> Go to Current Month
  </div>
</div>

  </div>
  );
}

export default Panel;
