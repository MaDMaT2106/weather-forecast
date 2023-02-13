import { configureStore } from '@reduxjs/toolkit';
import forecastReducer from './forecastSlice';

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  },
});
