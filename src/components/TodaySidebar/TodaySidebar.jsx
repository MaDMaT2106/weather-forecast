import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TimeAndDate from './TimeAndDate';
import TodaysImage from './TodaysImage';
import { fetchGeocoding, fetchForecast } from '../../store/forecastSlice';

import './TodaySidebar.scss';

function TodaySidebar() {
  const dispatch = useDispatch();
  const forecast = useSelector((state) => state.forecast.forecast);
  const geolocation = useSelector((state) => state.forecast?.geolocation[0]);

  const weatherId = forecast.current?.weather[0].id;
  const temperature = Math.round(forecast.current?.temp);
  const weatherDescription = forecast.current?.weather[0].description;

  const [city, setCity] = useState('');

  async function fetchByCity() {
    dispatch(fetchGeocoding(city));
    dispatch(fetchForecast());
  }
  const onSubmit = (e) => {
    e.preventDefault();
    fetchByCity();
    // dispatch(fetchGeocoding(city));
  };

  return (
    <div className="todaySidebar container">
      <h1>Weather Forecast</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="todaySidebar-search"
          placeholder="Enter city name..."
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      <TodaysImage weatherId={weatherId} />
      <div className="todaySidebar-tempAndDesc">
        <span className="todaySidebar-temp">
          {temperature ? temperature : ''} &#8451;
        </span>
        <span className="todaySidebar-desc">, {weatherDescription}</span>
      </div>

      <div className="todaySidebar-locationAndTime">
        <TimeAndDate />
        <p>
          {geolocation?.country}, {geolocation?.name}
        </p>
      </div>
    </div>
  );
}

export default TodaySidebar;
