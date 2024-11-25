import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllCourses = async () => {
  try {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const enrollUserInCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.post(`${COURSES_API}/${courseId}/enroll`, { userId });
    return response.data;
  } catch (error) {
    console.error("Error enrolling user in course:", error);
    throw error;
  }
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  try {
    const response = await axios.post(`${COURSES_API}/${courseId}/unenroll`, { userId });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error unenrolling user from course:", error);
    throw error;
  }
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials
    .get(`${COURSES_API}/${courseId}/modules`);
    console.log("retrieved modules for couse: course client", response.data);
  return response.data;
};


export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
  
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
 };
 
// courseClient.js


export const findMyCourses = async () => {
  try {
    const response = await axios.get(`${REMOTE_SERVER}/api/users/current/courses`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error finding my courses:', error);
    throw error;
  }
};

export const findCourseById = async (courseId: String) => {
  try {
    const { data } = await axios.get(`${COURSES_API}/${courseId}`);
    return data;
  } catch (error) {
    console.error("Error finding course by ID:", error);
    throw error;
  }
};

// Keep your other functions like fetchAllCourses, createCourse, etc. here as well.


