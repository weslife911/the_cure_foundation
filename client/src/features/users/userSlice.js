import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    users: [],
    hasSignedUp: false,
    isLoggedIn: false,
    authUser: {}
};

export const signupUser = createAsyncThunk("users/signupUser", async(data) => {
    try {
        const response = await axiosInstance.post("/auth/signup", data);
        console.log(response.data);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const loginUser = createAsyncThunk("users/loginUser", async(data) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        console.log(response.data);
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const logout = createAsyncThunk("users/logout", async() => {
    try {
        const response = await axiosInstance.post("/auth/logout");
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const updateProfile = createAsyncThunk("users/updateProfile", async() => {
    try {
        const response = await axiosInstance.put("/auth/update-profile");
        return response.data;
    } catch(e) {
        toast.error(e.message);
    }
});

export const fetchAuthUser = createAsyncThunk("users/fetchAuthUser", async() => {
    try {
        const response = await axiosInstance.get("/auth/check");
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
            if(action.payload.success === true) {
                state.hasSignedUp = true;
                localStorage.setItem("token", action.payload.token);
                toast.success(action.payload.message);
            } else {
                toast.error(action.payload.message);
            }
        })
        .addCase(loginUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload.success === true) {
                
            console.log(action.payload);
                state.isLoggedIn = true;
                localStorage.setItem("token", action.payload.token);
                toast.success(action.payload.message);
            } else {
                console.log(action.payload);
                toast.error(action.payload.message);
            }
        })
        .addCase(logout.pending, (state) => {
            state.status = "pending";
        })
        .addCase(logout.fulfilled, (state, action) => {
            if(action.payload.success === true) {
                localStorage.removeItem("token");
                toast.success(action.payload.message);
            } else {
                toast.error(action.payload.message);
            }
        })
        .addCase(fetchAuthUser.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchAuthUser.fulfilled, (state, action) => {
            state.authUser = action.payload;
        })
        .addCase(updateProfile.pending, (state) => {
            state.status = "pending";
        })
        .addCase(updateProfile.fulfilled, (state, action) => {
            if(action.payload.success === true) {
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
export const getAuthUser = (state) => state.users.authUser;
export default userSlice.reducer;