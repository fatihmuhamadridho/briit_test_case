import { configureStore } from '@reduxjs/toolkit';
import airSlice from './slices/air.slice';
import weatherSlice from './slices/weather.slice';

const rootReducer = {
  weather: weatherSlice,
  air: airSlice,
};

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
