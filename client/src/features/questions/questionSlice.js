import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    questions: []
};

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions", async() => {
    try {
        const questions = await axiosInstance.get("/question/get-questions");
        return questions.data;
    } catch(e) {
        return e.message;
    }
});

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchQuestions.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchQuestions.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.questions = action.payload;
        })
    }
});

export default questionSlice.reducer;
export const getAllQuestions = (state) => state.questions.questions;
export const getQuestionStatus = (state) => state.questions.status;