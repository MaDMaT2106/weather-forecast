import { useSelector } from 'react-redux';

import TimeAndDate from './TimeAndDate';
import TodaysImage from './TodaysImage';

import './TodaySidebar.scss';

function TodaySidebar() {
  const forecast = useSelector((state) => state.forecast.forecast);
  const geolocation = useSelector((state) => state.forecast?.geolocation);

  const weatherId = forecast.current?.weather[0].id;
  const temperature = Math.round(forecast.current?.temp);
  const weatherDescription = forecast.current?.weather[0].description;

  return (
    <div className="todaySidebar container">
      <h1>Weather Forecast</h1>
      <TodaysImage weatherId={weatherId} />
      <div className="todaySidebar-tempAndDesc">
        <span className="todaySidebar-temp">{temperature ? temperature : ''} &#8451;</span>
        <span className="todaySidebar-desc">, {weatherDescription}</span>
      </div>

      <div className="todaySidebar-locationAndTime">
        <TimeAndDate />
        <p>
          {geolocation.country}, {geolocation.region}
        </p>
      </div>
    </div>
  );
}

export default TodaySidebar;
