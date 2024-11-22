import { createSlice } from "@reduxjs/toolkit";

// Define the initial state as an empty array
const initialState: any[] = []; // Now state.assignments is an array

// Create the slice for assignments
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.length = 0; // Clear the existing array
      state.push(...action.payload); // Add new assignments
    },
    addAssignment: (state, action) => {
      const assignment = action.payload;
      // Ensure the assignment isn't already in the state by checking `_id`
      const alreadyExists = state.some((a: any) => a._id === assignment._id);
      if (!alreadyExists) {
        state.push(assignment);
      }
    },
    updateAssignment: (state, action) => {
      const updatedAssignment = action.payload;
      const index = state.findIndex((a: any) => a._id === updatedAssignment._id);
      if (index !== -1) {
        state[index] = updatedAssignment;
      }
    },
    deleteAssignmentAction: (state, action) => {
      const assignmentId = action.payload;
      const index = state.findIndex((a: any) => a._id === assignmentId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// Export actions and reducer
export const { setAssignments, addAssignment, updateAssignment, deleteAssignmentAction } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

// Selector to get assignments for a specific course
export const selectCourseAssignments = (state: any, courseId: string) => {
  return state.assignments.filter((a: any) => a.course === courseId);
};

// Selector to get all assignments
export const selectAllAssignments = (state: any) => {
  return state.assignments;
};
