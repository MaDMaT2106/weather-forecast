import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const FORECAST_API_KEY = import.meta.env.VITE_FORECAST_API_KEY;

const coords = {
  lat: 49.0390512,
  lng: 28.1085937,
};

// export const fetchFunction = createAsyncThunk(
//   'forecast/fetchFunction',
//   async function(payload, {getState}){
//     const state = getState();
//     const coords = state.forecast.coordinates;
//     let link = `${}?`
//   }
// )

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
export const fetchReverseGeocoding = createAsyncThunk(
  'forecast/fetchReverseGeocoding',
  async function (_, { getState }) {
    const state = getState();
    const coords = state.forecast.coordinates;
    const link = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.lat}&lon=${coords.lng}&appid=${FORECAST_API_KEY}`;
    const response = await fetch(link);
    const data = await response.json();
    return data;
  }
);
export const fetchGeocoding = createAsyncThunk(
  'forecast/fetchGeocoding',
  async function (payload) {
    console.log(payload);
    let link = `http://api.openweathermap.org/geo/1.0/direct?q=${payload}&limit=1&appid=${FORECAST_API_KEY}`;
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
    forecast.addCase(fetchReverseGeocoding.fulfilled, (state, action) => {
      state.geolocation = action.payload;
    });
    forecast.addCase(fetchGeocoding.fulfilled, (state, action) => {
      state.geolocation = action.payload;
      state.coordinates = {
        lat: action.payload[0].lat,
        lng: action.payload[0].lon,
      };
    });
  },
});

export const { addCoordinates } = forecastSlice.actions;
export default forecastSlice.reducer;
