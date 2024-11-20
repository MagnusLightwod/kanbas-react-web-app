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
  // console.log("Attempting to get enrollments")
  // console.log('State in selector:', state);
  // console.log('User ID:', userId);
  console.log('Enrollments in state:', state.enrollments);
  // console.log("this is the user ID", userId);
  // if (state.enrollments.length > 0) {
  //   console.log("Enrollment 1 user id:", state.enrollments[1].userId);
  // } else {
  //   console.log("No enrollments found in state.");
  // }
  return state.enrollments;
 
  
};


// Selector to get all enrollments
export const selectAllEnrollments = (state: any) => {
  return state.enrollments;
};