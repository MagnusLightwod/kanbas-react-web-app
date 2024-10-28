import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: {
    userId: string;
    courseId: string;
  }[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setCourseEnrollment: (
      state,
      action: PayloadAction<{ userId: string; courseId: string; enroll: boolean }>
    ) => {
      const { userId, courseId, enroll } = action.payload;

      if (enroll) {
        // Add enrollment if it does not exist
        const alreadyEnrolled = state.enrollments.some(
          (enrollment) => enrollment.userId === userId && enrollment.courseId === courseId
        );

        if (!alreadyEnrolled) {
          state.enrollments.push({ userId, courseId });
        }
      } else {
        // Remove enrollment
        state.enrollments = state.enrollments.filter(
          (enrollment) => !(enrollment.userId === userId && enrollment.courseId === courseId)
        );
      }
    },
  },
});

export const { setCourseEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
