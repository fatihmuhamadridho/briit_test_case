import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "@services/weather.service";

export const weather = {
    now: createAsyncThunk('weather/now', async (location: any) => {
        const res = await weatherService.getWeather(location);
        return res;
    }),
    forecast: createAsyncThunk('weather/forecast', async (location: any) => {
        const res = await weatherService.getForecast(location);
        return res;
    })
}

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        status: "",
        data: [],
        forecast: [],
    },
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(weather.now.pending, (state: any, action: any) => {
            state.status = 'loading';
        });
        builder.addCase(weather.now.fulfilled, (state: any, action: any) => {
            state.status = "success"
            state.data = action.payload;
        });
        builder.addCase(weather.now.rejected, (state: any, action: any) => {
            state.status = 'failed';
        });
        builder.addCase(weather.forecast.pending, (state: any, action: any) => {
            state.status = 'loading';
        });
        builder.addCase(weather.forecast.fulfilled, (state: any, action: any) => {
            state.status = "success"
            state.forecast = action.payload;
        });
        builder.addCase(weather.forecast.rejected, (state: any, action: any) => {
            state.status = 'failed';
        });
    }
})

export default weatherSlice.reducer