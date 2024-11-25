import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import * as moduleClient from "./client";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlbuttons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();

  
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const deleteModuleForCourse = async (moduleId: string) => {
    try {
      await moduleClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId)); // Only update the state if the delete was successful
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };
  
  const updateModuleForCourse = async (module: any) => {
    try {
      await moduleClient.updateModule(module);
      dispatch(updateModule(module)); // Update Redux state only after successful update in backend
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  
  const [moduleName, setModuleName] = useState("");  

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid, _id:  Date.now().toString()};
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  // const saveModule = async (module: any) => {
  //   await modulesClient.updateModule(module);
  //   dispatch(updateModule(module));
  // };
  
  
  return (
    <div className="wd-modules">
      {/* Modules Controls */}
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={createModuleForCourse}
      />

      {/* Modules List */}
      <ul id="wd-modules" className="list-group rounded-0">

    {/* fixed issue crashing when trying to edit a new module */}  
{modules.map((module: any) => (
  <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
      
      {!module.editing ? (
        module.name
      ) : (
        <input
          className="form-control w-50 d-inline-block"
          value={module.name || ""}
          onChange={(e) => updateModuleForCourse ({ ...module, name: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(updateModule({ ...module, editing: false }));
            }
          }}
        />
      )}
      
      <ModuleControlButtons
        moduleId={module._id}
        deleteModule={(moduleId) => deleteModuleForCourse(moduleId)}
        editModule={() => dispatch(editModule(module._id))}
      />
    </div>

    {module.lessons && (
      <ul className="wd-lessons list-group rounded-0">
        {module.lessons.map((lesson: any) => (
          <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> {lesson.name}
            <LessonControlButtons />
          </li>
        ))}
      </ul>
    )}
  </li>
))}
      </ul>

    </div>
  );
}
