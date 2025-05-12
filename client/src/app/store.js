import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/countries/countrySlice";
import userReducer from "../features/users/userSlice";
import imageReducer from "../features/images/imageSlice";
import questionReducer from "../features/questions/questionSlice";
import reducerReducer from "../features/results/resultSlice";
import subjectReducer from "../features/subjects/subjectSlice";

export const store = configureStore({
    reducer: {
        countries: countryReducer,
        users: userReducer,
        images: imageReducer,
        questions: questionReducer,
        results: reducerReducer,
        subjects: subjectReducer
    }
});