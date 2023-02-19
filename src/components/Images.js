import brokenClouds from '../img/icons/broken-clouds.png';
import brokenCloudsNight from '../img/icons/broken-clouds-night.png';
import clearSky from '../img/icons/clear-sky.png';
import clearSkyNight from '../img/icons/clear-sky-night.png';
import fewClouds from '../img/icons/few-clouds.png';
import fewCloudsNight from '../img/icons/few-clouds-night.png';
import mist from '../img/icons/mist.png';
import rain from '../img/icons/rain.png';
import rainNight from '../img/icons/rain-night.png';
import scatteredClouds from '../img/icons/scattered-clouds.png';
import showerRain from '../img/icons/shower-rain.png';
import showerRainNight from '../img/icons/shower-rain-night.png';
import snow from '../img/icons/snow.png';
import snowNight from '../img/icons/snow-night.png';
import thunderstorm from '../img/icons/thunderstorm.png';
import thunderstormNight from '../img/icons/thunderstorm-night.png';

export const Images = {
  brokenClouds,
  brokenCloudsNight,
  clearSky,
  clearSkyNight,
  fewClouds,
  fewCloudsNight,
  mist,
  rain,
  rainNight,
  scatteredClouds,
  showerRain,
  showerRainNight,
  snow,
  snowNight,
  thunderstorm,
  thunderstormNight,
};

export const weatherType = [
  {
    name: 'Thunderstorm',
    gte: 200,
    lte: 232,
    image: Images.thunderstorm,
    imageNight: Images.thunderstormNight,
  },
  {
    name: 'Drizzle',
    gte: 300,
    lte: 321,
    image: Images.showerRain,
    imageNight: Images.showerRainNight,
  },
  {
    name: 'Rain',
    gte: 500,
    lte: 531,
    image: Images.rain,
    imageNight: Images.rainNight,
  },
  {
    name: 'Snow',
    gte: 600,
    lte: 622,
    image: Images.snow,
    imageNight: Images.snowNight,
  },
  {
    name: 'Atmosphere ',
    gte: 700,
    lte: 781,
    image: Images.mist,
    imageNight: Images.mist,
  },
  {
    name: 'Clear',
    gte: 800,
    lte: 800,
    image: Images.clearSky,
    imageNight: Images.clearSkyNight,
  },
  {
    name: 'Few clouds',
    gte: 801,
    lte: 801,
    image: Images.fewClouds,
    imageNight: Images.fewCloudsNight,
  },
  {
    name: 'Scattered clouds',
    gte: 802,
    lte: 802,
    image: Images.scatteredClouds,
    imageNight: Images.scatteredClouds,
  },
  {
    name: 'Broken  clouds',
    gte: 803,
    lte: 804,
    image: Images.brokenClouds,
    imageNight: Images.brokenCloudsNight,
  },
];
