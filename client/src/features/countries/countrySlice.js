import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    status: "idle",
    countries: []
};

const COUNTRIES_URL = "https://restcountries.com/v3.1/all";

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async() => {
    try {
        const response = await axios.get(COUNTRIES_URL);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const countrySlice = createSlice({
    name: "countries",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchCountries.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
            state.status = "fullfilled";
            state.countries = action.payload;
        })
    }
});

export const getAllCountries = (state) => state.countries.countries;
export const getCountryStatus = (state) => state.countries.status;
export default countrySlice.reducer;