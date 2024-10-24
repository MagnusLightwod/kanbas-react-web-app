import { createSlice } from "@reduxjs/toolkit";
import { assiginments } from "../../Database";
import AssignmentEditor from "./Editor";

const initialState = {
    assiginments : assiginments,
}

const assiginmentsSlice = createSlice( {
    name : "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: assiginment}) => {
            const newAssignment: any = {
                _id: assiginment._id,
                title: assiginment.name,
                course: assiginment.course,
                description: assiginment.description,
                points: assiginment.points,
                dueDate: assiginment.dueDate,
                availableDate: assiginment.availableDate,
                untilDate: assiginment.untilDate,
                submisstionType: assiginment.submisstionType,
                assiginmentGroup: assiginment.assiginmentGroup,
                displayGradeAs: assiginment.displayGradeAs
            };
            state.assiginments = [...state.assiginments, newAssignment] as any;
        },

        deleteAssignment: (state, {payload: assignmentID}) => {
            state.assiginments = state.assiginments.filter((a: any) => a._id !== assignmentID);
        },

        updateAssignment: (state, {payload: assignment}) => {
            state.assiginments = state.assiginments.map((a: any) =>
            a._id === assignment._id ? assignment : a
        ) as any;
        },

        editAssignment: (state, {payload: assignmentId}) => {
            state.assiginments  = state.assiginments.map((a: any) =>
            a._id === assignmentId ? {...a, editing: true} : a)
        },

        
    }
});

export const {addAssignment, deleteAssignment, updateAssignment, editAssignment } = assiginmentsSlice.actions;
export default assiginmentsSlice.reducer;

