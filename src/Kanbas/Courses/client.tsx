import axios from "axios";

// Set up the base URL for the API
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Create an axios instance to handle requests with credentials
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

// Function to fetch all available courses
export const fetchAllCourses = async () => {
  try {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

// Function to fetch enrolled courses for a given user
export const findCoursesForEnrolledUser = async (userId: string) => {
  try {
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/users/${userId}/courses`);
    return data;
  } catch (error) {
    console.error(`Error fetching courses for user ${userId}:`, error);
    throw error;
  }
};

// Function to create a new course (requires a faculty user)
export const createCourse = async (course: any) => {
  try {
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/users/current/courses`, course);
    return data;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Function to delete a course by ID (requires faculty user)
export const deleteCourse = async (courseId: string) => {
  try {
    await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
    console.log(`Successfully deleted course with ID: ${courseId}`);
  } catch (error) {
    console.error(`Error deleting course ${courseId}:`, error);
    throw error;
  }
};

// Function to update a course by ID (requires faculty user)
export const updateCourse = async (courseId: string, updatedCourse: any) => {
  try {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${courseId}`, updatedCourse);
    return data;
  } catch (error) {
    console.error(`Error updating course ${courseId}:`, error);
    throw error;
  }
};

// Function to enroll the current user in a course
export const enrollInCourse = async (userId: string, courseId: string) => {
  try {
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/users/${userId}/enroll/${courseId}`);
    return data;
  } catch (error) {
    console.error(`Error enrolling user ${userId} in course ${courseId}:`, error);
    throw error;
  }
};

// Function to unenroll the current user from a course
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  try {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/users/${userId}/unenroll/${courseId}`);
    return data;
  } catch (error) {
    console.error(`Error unenrolling user ${userId} from course ${courseId}:`, error);
    throw error;
  }
};
