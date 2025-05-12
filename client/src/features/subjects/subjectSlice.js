import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

const initialState = {
    status: "idle",
    subjects: []
};

export const fetchSubjects = createAsyncThunk("subjects/fetchSubjects", async() => {
    try {
        const response = await axiosInstance.get("/subject/subjects");
        return response.data;
    } catch(e) {
        return e.message;
    }
});

export const subjectSlice = createSlice({
    name: "subjects",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchSubjects.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchSubjects.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.subjects = action.payload;
        })
    }
});

export const selectSubjectNameById = (state, subjectId) => {
  try {
    console.log(state.subjects.subjects)
    // Verify we have the expected structure
    if (!state?.subjects?.subjects) {
    //   console.warn('Subjects data not found in expected state structure');
      return 'Unknown Subject';
    }
    
    // Handle case where subjects isn't an array
    if (!Array.isArray(state.subjects.subjects)) {
    //   console.warn('Subjects is not an array', state.subjects.subjects);
      return 'Unknown Subject';
    }
    
    const subject = state.subjects.subjects.find(subj => subj._id === subjectId);
    console.log(subject);
    return subject?.name || 'Unknown Subject';
  } catch (error) {
    // console.error('Error in selectSubjectNameById:', error);
    return error;
  }
};
export const getAllSubjects = (state) => state.subjects.subjects;
export const getSubjectStatus = (state) => state.subjects.status;
export default subjectSlice.reducer;