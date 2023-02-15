import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Images, weatherType } from '../Images';

export default function TodaysImage({ weatherId }) {
  const [image, setImage] = useState(Images.scatteredClouds);
  const sunset = new Date(
    useSelector((state) => state.forecast.forecast.current?.sunset) * 1000
  );
  const date = new Date();
  const hours = date;

  useEffect(() => {
    const res = weatherType
      .filter((el) => weatherId >= el.gte && weatherId <= el.lte)
      .pop();
    setImage(hours >= sunset ? res?.imageNight : res?.image);
  }, [weatherId]);
  return (
    <div>
      <img src={image} alt="Weather" />
    </div>
  );
}
