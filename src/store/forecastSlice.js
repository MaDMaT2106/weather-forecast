import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const FORECAST_API_KEY = import.meta.env.VITE_FORECAST_API_KEY;
const GEOLOCATION_API_KEY = import.meta.env.VITE_GEOLOCATION_API_KEY;

const coords = {
  lat: 49.0390512,
  lng: 28.1085937,
};

export const fetchForecast = createAsyncThunk(
  'forecast/fetchForecast',
  async function (_, { getState }) {
    const state = getState();
    const coords = state.forecast.coordinates;
    let link = `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.lat}&lon=${coords.lng}&exclude=minutely,alerts&units=metric&appid=${FORECAST_API_KEY}`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
  }
);
export const fetchGeolocation = createAsyncThunk(
  'forecast/fetchGeolocation',
  async function (_) {
    const link = `https://api.ipgeolocation.io/ipgeo?apiKey=${GEOLOCATION_API_KEY}`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
  }
);

const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    geolocation: {},
    coordinates: {},
    forecast: [],
  },
  reducers: {
    addCoordinates(state, action) {
      state.coordinates = { ...action.payload };
    },
  },
  extraReducers: (forecast) => {
    forecast.addCase(fetchForecast.fulfilled, (state, action) => {
      state.forecast = action.payload;
    });
    forecast.addCase(fetchGeolocation.fulfilled, (state, action) => {
      state.geolocation = action.payload;
    });
  },
});

export const { addCoordinates } = forecastSlice.actions;
export default forecastSlice.reducer;
