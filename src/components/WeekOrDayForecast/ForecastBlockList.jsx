import React from 'react';
import { useSelector } from 'react-redux';
import { week } from '../TodaySidebar/TimeAndDate';
import DayOfWeekBlock from './DayOfWeekBlock';
import Slider from 'react-slick';

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    swipe: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="forecastList container">
        {dailyForecast?.slice(1).map((day) => {
          return <DayOfWeekBlock dayInfo={day} key={Math.random() * 100} />;
        })}
      </Slider>

      {/* {
        <ul className="forecastList">
          {dailyForecast?.slice(1).map((day) => {
            return <DayOfWeekBlock dayInfo={day} key={Math.random() * 100} />;
          })}
        </ul>
      } */}
    </div>
  );
}
