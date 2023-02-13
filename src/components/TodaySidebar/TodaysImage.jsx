import { useState, useEffect } from 'react';
import { Images } from '../Images';

export default function TodaysImage({ weatherId }) {
  const [image, setImage] = useState(Images.scatteredClouds);

  const date = new Date();
  const hours = date?.getHours();

  const weatherTypes = {
    thunderstorm: {
      gte: 200,
      lte: 232
    }
  }

  // switch(weatherId){
  //   case weatherTypes.thunderstorm.gte
  // }

  useEffect(() => {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        if (hours >= 20) {
          setImage(Images.thunderstormNight);
        } else {
          setImage(Images.thunderstorm);
        }
        break;
      case weatherId >= 300 && weatherId < 400:
        if (hours >= 20) {
          setImage(Images.showerRainNight);
        } else {
          setImage(Images.showerRain);
        }
        break;
      case weatherId >= 500 && weatherId < 600:
        if (hours >= 20) {
          setImage(Images.rainNight);
        } else {
          setImage(Images.rain);
        }
        break;
      case weatherId >= 600 && weatherId < 700:
        if (hours >= 20) {
          setImage(Images.snowNight);
        } else {
          setImage(Images.snow);
        }
        break;
      case weatherId >= 700 && weatherId < 800:
        setImage(Images.mist);
        break;
      case weatherId === 800:
        if (hours >= 20) {
          setImage(Images.clearSkyNight);
        } else {
          setImage(Images.clearSky);
        }
        break;
      case weatherId === 801:
        if (hours >= 20) {
          setImage(Images.fewCloudsNight);
        } else {
          setImage(Images.fewClouds);
        }
        break;
      case weatherId === 802:
        setImage(Images.scatteredClouds);
        break;
      case weatherId >= 803:
        if (hours >= 20) {
          setImage(Images.brokenCloudsNight);
        } else {
          setImage(Images.brokenClouds);
        }
        break;
    }
  }, [weatherId]);
  return (
    <div>
      <img src={image} alt="Weather" />
    </div>
  );
}
