/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { APIRoutes } from '@api/api_routes';

export default {
  getAir: async (location: any) => {
    try {
      const url =
        APIRoutes.air.now +
        `${location.lat !== null ? '&lat=' + location.lat : '&lat=-6.2114873'}` +
        `${location.lon !== null ? '&lon=' + location.lon : '&lon=106.6880955'}`;
      const reseponse = await axios.get(url);

      return reseponse.data;
    } catch (error) {
      throw error;
    }
  }
};
