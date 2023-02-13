import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dots } from 'react-preloaders';

import {
  addCoordinates,
  fetchForecast,
  fetchGeolocation,
} from './store/forecastSlice.js';
import getBrowserLocation from './functions/geolocation.js';

import WeatherForecast from './components/WeatherForecast.jsx';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState('true');
  async function asyncGetLocation() {
    await getBrowserLocation()
      .then((curLoc) => {
        dispatch(addCoordinates(curLoc));
        return curLoc;
      })
      .catch((defaultLoc) => {
        dispatch(addCoordinates(defaultLoc));
      });
  }
  function dispatchFetch() {
    dispatch(fetchForecast());
    dispatch(fetchGeolocation());
    setLoading(false);
  }

  async function preloadFunctions() {
    await asyncGetLocation();
    dispatchFetch();
  }

  useEffect(() => {
    preloadFunctions();
  }, []);

  return (
    <div className="App">
      <WeatherForecast />
      <Dots customLoading={loading} time={1000} background="#f6f6f8"/>
    </div>
  );
}

export default App;
