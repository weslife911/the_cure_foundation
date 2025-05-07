import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countrySlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        countries: countryReducer,
        users: userReducer
    }
});