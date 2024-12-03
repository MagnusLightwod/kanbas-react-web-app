import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// i think this is right but duble check incase of needing course id again here
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true
 });

export const findAssignmentsInCourse = async (courseId: string) => {
    console.log("getting assignments................");
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    console.log("getting assignments respoonse", response);
    console.log("getting assignments respoonse data", response.data);
    return response.data;
}

export const createAssignment = async (courseId: string, assignment: any) => {
    console.log("creating................");
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments/new`, assignment);
    console.log("creating assignments respoonse", response);
    console.log("creating assignments respoonse data", response.data);
    return response.data;
};

export const deleteAssignment = async (assignmentId: any) => {
    console.log("deleting................");
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
}

export const updateAssignment = async (assignmentId: any, assignment: any) => {
    console.log("updating................");
    const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
    return response.data;
}

export const findAssignment = async (courseId: string, assignmentId: string) => {
    console.log("getting single assignment to edit................");
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
    return response.data;
  };