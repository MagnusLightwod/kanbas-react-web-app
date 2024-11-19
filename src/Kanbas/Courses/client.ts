import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
  try {
    const { data } = await axios.get(COURSES_API);
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
    throw error;
  }
};

export const deleteCourse = async (id: string) => {
  try {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
};

export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
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
    return response.data;
  } catch (error) {
    console.error("Error unenrolling user from course:", error);
    throw error;
  }
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

