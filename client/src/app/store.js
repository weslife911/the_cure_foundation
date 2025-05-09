import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countrySlice";
import userReducer from "../features/users/userSlice";
import imageReducer from "../features/images/imageSlice";

export const store = configureStore({
    reducer: {
        countries: countryReducer,
        users: userReducer,
        images: imageReducer
    }
});