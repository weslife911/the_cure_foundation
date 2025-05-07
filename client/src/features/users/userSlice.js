import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    users: [],
    hasSignedUp: false,
    isLoggedIn: false,
};

export const signupUser = createAsyncThunk("users/signupUser", async(data) => {
    try {
        const response = await axiosInstance.post("/auth/signup", data);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const loginUser = createAsyncThunk("users/loginUser", async(data) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const logout = createAsyncThunk("users/logout", async(data) => {
    try {
        const response = await axiosInstance.post("/auth/logout", data);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(signupUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            console.log(action.payload);
            if(action.payload.success === true) {
                state.hasSignedUp = true;
                toast.success(action.payload.message);
            } else {
                toast.error(action.payload.message);
            }
        })
        .addCase(loginUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload);
            if(action.payload.success === true) {
                state.isLoggedIn = true;
                toast.success(action.payload.message);
            } else {
                toast.error(action.payload.message);
            }
        })
    }
});

export const getUserStatus = (state) => state.users.status;
export const hasSignedUp = (state) => state.users.hasSignedUp;
export const isLoggedIn = (state) => state.users.isLoggedIn;
export default userSlice.reducer;