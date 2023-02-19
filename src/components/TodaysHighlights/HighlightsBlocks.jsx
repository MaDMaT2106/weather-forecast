import { useSelector } from 'react-redux';
import Block from './Block';
import arrowUp from '../../img/arrow-up.png';
import arrowDown from '../../img/arrow-down.png';

export default function HighlightsBlocks() {
  const forecast = useSelector((state) => state.forecast.forecast);
  const date = new Date();

  const visibility = forecast?.current?.visibility;
  function getTimeFrom(arg) {
    const time = new Date(arg * 1000);
    return `${
      time?.getHours() < 10 ? '0' + time?.getHours() : time?.getHours()
    }:${
      time?.getMinutes() < 10 ? '0' + time?.getMinutes() : time?.getMinutes()
    }`;
  }

  return (
    <div className="highlightBlocks container">
      <Block title={'Humidity'} content={`${forecast?.current?.humidity}%`} />
      <Block
        title={'Wind Status'}
        content={`${forecast?.current?.wind_speed} m/s`}
      />
      <Block
        title={'Visibility'}
        content={
          visibility > 1000 ? visibility / 1000 + ' km' : visibility + ' m'
        }
      />
      <Block
        title={'Sunrise & Sunset'}
        content={
          <div className="sunriseAndSunset">
            <div>
              <img src={arrowUp} width={`40px`} />
              <span>{getTimeFrom(forecast?.current?.sunrise)}</span>
            </div>

            <div>
              <img src={arrowDown} width={`40px`} />
              <span>{getTimeFrom(forecast?.current?.sunset)}</span>
            </div>
          </div>
        }
      />
    </div>
  );
}
