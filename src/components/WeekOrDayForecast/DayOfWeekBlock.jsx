import React from 'react';
import TodaysImage from '../TodaySidebar/TodaysImage';

export default function DayOfWeekBlock({ dayInfo }) {
  const { dayTemp, nightTemp } = dayInfo?.temperature;

  return (
    <div className="dayOfWeekBlock">
      <p>{dayInfo?.day}</p>
      <TodaysImage weatherId={dayInfo?.weatherId} />
      <p className="dayOfWeekBlock-temperature">
        <span className="dayOfWeekBlock-dayTemperature">{Math.round(dayTemp)}&#176;</span>
        <span className="dayOfWeekBlock-nightTemperature">{Math.round(nightTemp)}&#176;</span>
      </p>
    </div>
  );
}
