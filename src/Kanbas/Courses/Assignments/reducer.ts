// Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

// bruter force helps add assignments 
interface Assignment {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  assignmentGroup: string;
  displayGradeAs: string;
  submissionType: string;
  dueDate: string;
  availableDate: string;
  untilDate: string;
  textEntry: boolean;
  websiteURL: boolean;
  mediaRecordings: boolean;
  studentAnnotation: boolean;
  fileUploads: boolean;
}

interface AssignmentsState {
  assignments: Assignment[];
}

interface SetAssignmentsAction {
  type: string;
  payload: Assignment[];
}

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state: AssignmentsState, action: SetAssignmentsAction) => {
      const newAssignments = action.payload;
      state.assignments = [
        ...state.assignments,
        ...newAssignments.filter(
          (assignment) => !state.assignments.some((existing) => existing._id === assignment._id)
        ),
      ];
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
