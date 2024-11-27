// Frontend API Client (client.tsx)
import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const USERS_API = `${REMOTE_SERVER}/api/users`;
const axiosWithCredentials = axios.create({ withCredentials: true });


// Enroll User in a Course
export const enrollUserInCourse = async (courseId: string) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/${courseId}`, {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error enrolling user in course:", error);
    throw error;
  }
};

// Unenroll User from a Course
export const unenrollUserFromCourse = async (courseId: string) => {
  try {
    const response = await axios.delete(`${ENROLLMENTS_API}/${courseId}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error unenrolling user from course:", error);
    throw error;
  }
};

// get array of users in the data property. 
export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

