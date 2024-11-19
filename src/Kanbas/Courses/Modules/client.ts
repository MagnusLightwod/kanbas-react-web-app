import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const deleteModule = async (moduleId: string) => {
 const response = await axios.delete(`${MODULES_API}/${moduleId}`);
 return response.data;
};

export const updateModule = async (module: any) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axios
      .get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
  };
  