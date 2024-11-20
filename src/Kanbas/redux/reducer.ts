// enrollmentSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "../Database";
import * as client from "../Courses/client"
interface EnrollmentState {
  enrollments: {
    userId: string;
    courseId: string;
  }[];
}

const initialState: EnrollmentState = {
  enrollments: db.enrollments.map((enrollment) => ({
    userId: enrollment.user,
    courseId: enrollment.course,
  })),
  
};

export const enrollUser = createAsyncThunk(
  "enrollments/enrollUser",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    await client.enrollUserInCourse(userId, courseId);
    return { userId, courseId };
  }
);

// Thunk to unenroll user from a course
export const unenrollUser = createAsyncThunk(
  "enrollments/unenrollUser",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    await client.unenrollUserFromCourse(userId, courseId);
    return { userId, courseId };
  }
);

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


// Selector to get enrollments for a specific user
export const selectUserEnrollments = (state: any, userId: string) => {
  return state.enrollmentReducer.enrollments.filter(
    (enrollment: any) => enrollment.userId === userId
  );
};

// Selector to get all course IDs for a user
export const selectUserCourses = (state: any, userId: string) => {
  return selectUserEnrollments(state, userId).map((enrollment : any) => enrollment.courseId);
};

export const { setCourseEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
