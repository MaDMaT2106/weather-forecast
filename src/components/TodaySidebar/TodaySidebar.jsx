import { useSelector } from 'react-redux';
import './TodaySidebar.scss';

import TimeAndDate from './TimeAndDate';
import TodaysImage from './TodaysImage';

function TodaySidebar() {
  const forecast = useSelector((state) => state.forecast.forecast);
  const weatherId = forecast.current?.weather[0].id;
  const temperature = Math.round(forecast.current?.temp);
  const weatherDescription = forecast.current?.weather[0].description;

  return (
    <div className="todaySidebar">
      <h1>Weather Forecast</h1>
      <TodaysImage weatherId={weatherId} />
      <h2>{temperature ? temperature : ''} &#8451;</h2>
      
      <TimeAndDate />
      <div className="todaySidebar-description">
        <p>{weatherDescription}</p>
      </div>
    </div>
  );
}

export default TodaySidebar;
