import React from 'react';
import { useSelector } from 'react-redux';
import { week } from '../TodaySidebar/TimeAndDate';
import DayOfWeekBlock from './DayOfWeekBlock';

export default function ForecastBlockList() {
  const forecast = useSelector((state) => state.forecast.forecast);
  const date = new Date();

  const days = forecast.daily;
  const dailyForecast = days?.map((day) => ({
    day: week[new Date(day.dt * 1000).getDay()],
    weatherId: day.weather[0].id,
    temperature: {
      dayTemp: day.temp.day,
      nightTemp: day.temp.night,
    },
  }));
  return (
    <div>
      {
        <ul className="forecastList">
          {dailyForecast?.slice(1).map((day) => {
            return <DayOfWeekBlock dayInfo={day} key={Math.random() * 100} />;
          })}
        </ul>
      }
    </div>
  );
}
