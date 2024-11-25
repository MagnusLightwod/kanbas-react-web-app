import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const deleteModule = async (moduleId: String) => {
  try {
    console.log("Deleting module with id in client:", moduleId);
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data; // Return response only if it was successful
  } catch (error) {
    console.error("Error deleting module:", error);
    throw error; // Handle error appropriately
  }
};


export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };
  