/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { APIRoutes } from '@api/api_routes';

export default {
  getWeather: async (location: any) => {
    try {
      const url =
        APIRoutes.weather.now +
        `${location.lat !== null ? '&lat=' + location.lat : '&lat=-6.2114873'}` +
        `${location.lon !== null ? '&lon=' + location.lon : '&lon=106.6880955'}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getForecast: async (location: any) => {
    try {
      const url =
        APIRoutes.weather.forecast +
        `${location.lat !== null ? '&lat=' + location.lat : '&lat=-6.2114873'}` +
        `${location.lon !== null ? '&lon=' + location.lon : '&lon=106.6880955'}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
