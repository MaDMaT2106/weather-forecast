import React from 'react';
import ForecastBlockList from './ForecastBlockList';

import './WeekOrDayForecast.scss';

export default function WeekOrDayForecast() {
  return (
    <div className="weekOrDayForecast container">
      <h3>Week</h3>
      <ForecastBlockList />
    </div>
  );
}
