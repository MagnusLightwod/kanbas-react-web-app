// Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      console.log("setAssignments called with:", action.payload);
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      console.log("addAssignment called with:", assignment);
      state.assignments = [...state.assignments, assignment] as any;
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    deleteAssignmentAction: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    
    },
  },
});

export const { setAssignments, addAssignment, updateAssignment, deleteAssignmentAction } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
