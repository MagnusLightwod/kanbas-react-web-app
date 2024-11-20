import axios from 'axios';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
// Enroll a user in a course
export const enrollUserInCourse = async (courseId: string) => {
  try {
    const response = await axios.post(`${COURSES_API}/${courseId}/enroll`, null, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error enrolling user in course:', error);
    throw error;
  }
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (courseId: string) => {
  try {
    await axios.delete(`${COURSES_API}/${courseId}/unenroll`, { withCredentials: true });
  } catch (error) {
    console.error('Error unenrolling user from course:', error);
    throw error;
  }
};

// Fetch enrollments for a user
export const fetchEnrollments = async (userId: string) => {
  try {
    const response = await axios.get(`${ENROLLMENTS_API}/user/${userId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching enrollments for user:', error);
    throw error;
  }
};
