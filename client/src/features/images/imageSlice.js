import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    images: [],
    testimonies: []
};

export const fetchImages = createAsyncThunk("images/fetchImages", async() => {
    try {
        const images = await axiosInstance("/image/images");
        return images.data;
    } catch(e) {
        return e.message;
    }
});

export const fetchTestimonies = createAsyncThunk("images/fetchTestimonies", async() => {
    try {
        const testimonies = await axiosInstance("/testimony/testimonies");
        return testimonies.data;
    } catch(e) {
        return e.message;
    }
});

export const imageSlice = createSlice({
    name: "images",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchImages.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.images.concat(action.payload);
        })
        .addCase(fetchTestimonies.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchTestimonies.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.testimonies.concat(action.payload);
        })
    }
});

export const getImages = (state) => state.images.images;
export const getTestimonies = (state) => state.images.testimonies;
export const getImageById = (state, imageId) => state.images.images.find(image => image._id === imageId);
export default imageSlice.reducer;