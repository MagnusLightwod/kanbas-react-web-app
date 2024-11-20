import { createSlice } from "@reduxjs/toolkit";

// Define the initial state with an empty enrollments array
const initialState = {
  enrollments: [],
};

// Create the slice for enrollments
const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      console.log("1111");
      // Set the entire enrollments list
      state.enrollments = action.payload;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      console.log("2222");
      // Add a new enrollment if it doesn't exist
      const alreadyEnrolled = state.enrollments.some(
        (e: any) => e.userId === enrollment.userId && e.courseId === enrollment.courseId
      );

      if (!alreadyEnrolled) {
        const newEnrollment = {
          _id: new Date().getTime().toString(),
          userId: enrollment.userId,
          courseId: enrollment.courseId,
        };
        state.enrollments = [...state.enrollments, newEnrollment] as any;
      }
    },
    deleteEnrollment: (state, { payload: { userId, courseId } }) => {
      console.log("3333");
      // Remove an enrollment matching userId and courseId
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.userId === userId && e.courseId === courseId)
      );
    },
  },
});

// Export actions and reducer
export const { setEnrollments, addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

// Selector to get enrollments for a specific user
export const selectUserEnrollments = (state: any, userId: string) => {
  console.log("4444");
  return state.enrollments.enrollments.filter(
    (enrollment: any) => enrollment.userId === userId
  );
};


// Selector to get all enrollments
export const selectAllEnrollments = (state: any) => {
  console.log("5555");
  return state.enrollments.enrollments;
};