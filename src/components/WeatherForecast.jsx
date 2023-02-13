import React from 'react';

import TodaySidebar from './TodaySidebar/TodaySidebar';
import MainPart from './MainPart';
import './WeatherForecast.scss';

function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <TodaySidebar />
      <MainPart />
    </div>
  );
}

export default WeatherForecast;
