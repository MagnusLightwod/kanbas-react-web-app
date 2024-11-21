import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with an empty enrollments array
// enrollment reducer
const initialState: any[] = []; // Now state.enrollments is an array

// Create the slice for enrollments
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.length = 0; // Clear the existing array
      state.push(...action.payload); // Add new enrollments
    },
    addEnrollment: (state, action) => {
      const enrollment = action.payload;
      const alreadyEnrolled = state.some(
        (e: any) => e.userId === enrollment.userId && e.courseId === enrollment.courseId
      );
      if (!alreadyEnrolled) {
        state.push(enrollment);
      }
    },
    deleteEnrollment: (state, action) => {
      const { userId, courseId } = action.payload;
      const index = state.findIndex(
        (e: any) => e.userId === userId && e.courseId === courseId
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    
  },
});

// Export actions and reducer
export const { setEnrollments, addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

// Selector to get enrollments for a specific user

//// ISSUE HERE
export const selectUserEnrollments = (state: any, userId: string) => {
 //console.log('Enrollments in state:', state.enrollments);
  return state.enrollments;
 
  
};

// Selector to get all enrollments
export const selectAllEnrollments = (state: any) => {
  return state.enrollments;
};