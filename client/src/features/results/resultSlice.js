import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    results: []
};

export const fetchResults = createAsyncThunk("results/fetchResults", async() => {
    try {
        const response = await axiosInstance.get("https://the-cure-foundation.onrender.com/api/result/get-results");
        return response.data;
    } catch(e) {
        return e.message;
    }
});

export const resultSlice = createSlice({
    name: "results",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchResults.pending, (state) => {
            state.status = "pending"
        })
        .addCase(fetchResults.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.results = action.payload;
        })
    }
});

export const getUserResults = (state) => state.results.results;
export const getResultStatus = (state) => state.results.status;
export default resultSlice.reducer;