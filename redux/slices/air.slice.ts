import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import airService from "@services/air.service";

export const air = {
    now: createAsyncThunk('air/now', async (location: any) => {
        const res = await airService.getAir(location);

        return res;
    })
}

const airSlice = createSlice({
    name: "air",
    initialState: {
        status: "",
        data: [],
    },
    reducers: {},
    extraReducers: (builder: any) => {
        builder.addCase(air.now.pending, (state: any, action: any) => {
            state.status = 'loading';
        });
        builder.addCase(air.now.fulfilled, (state: any, action: any) => {
            state.status = "success"
            state.data = action.payload;
        });
        builder.addCase(air.now.rejected, (state: any, action: any) => {
            state.status = 'failed';
        });
    }
})

export default airSlice.reducer;