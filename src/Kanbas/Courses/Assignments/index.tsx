
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlbuttons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";

import * as assignmentClient from "./client";
import { useParams, useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssignments,
  deleteAssignmentAction,
  addAssignment,
} from "./reducer";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Get course ID from URL
  const navigate = useNavigate(); // Initialize navigate function
  const dispatch = useDispatch();
  
  //
  const assignments = useSelector((state: any) => state.assignmentReducer?.assignments || []);
  console.log("assignments in redux state: ", assignments)


  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  // fetch existing assignments
  useEffect(() => {
    let isMounted = true;
  
    const fetchAssignments = async () => {
      try {
        const assignmentsData = await assignmentClient.findAssignmentsInCourse(cid!);
        if (isMounted) {
          console.log("setting assignments");
          // Update the assignments state to include any new assignments
          dispatch(setAssignments(assignmentsData));
        }
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
  
    if (cid) {
      fetchAssignments();
    }
  
    return () => {
      isMounted = false; // cleanup function to prevent state updates if unmounted
    };
  }, [cid, dispatch]);
  
  
  
  // Filter assignments for the specific course based on cid
 

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/New`); 
  };

   // Function to confirm deletion
 
  // Function to confirm deletion
  const handleConfirm = async (assignmentId: string) => {
    const answer = window.confirm("Delete assignment? Are you sure?");
    if (answer) {
      try {
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignmentAction(assignmentId));
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };
  
  return (
    <div id="wd-modules-controls" className="text-nowrap wd-margin-right-left">
      <ul id="wd-modules" className="list-group rounded-0 wd-margin-right-left">
        {/* Search and Button Controls */}
        <div className="input-group mb-2">
          <span className="input-group-text bg-white border-end-0">
            <IoMdSearch />
          </span>
          <input
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control border-start-0"
          />
          <div>
            <button
              id="wd-collapse-all"
              className="btn btn-lg btn-secondary wd-margin-right-left"
              type="button"
              style={{ bottom: "1px" }}
            >
              Group
            </button>
            <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-danger me-1"
              onClick={handleAddAssignment}
            >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignments
            </button>
          </div>
        </div>

        {/* Assignments Section */}
        <div
          className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"
        >
          <span>
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
          </span>

          {/* Example placeholder for ModuleControlButtons */}
          <ModuleControlButtons
            moduleId="exampleModuleId"
            deleteModule={() => {}}
            editModule={() => {}}
          />
        </div>


        <ul className="wd-lessons list-group rounded-0">
          {assignments.length === 0 ? (
            <li>No assignments available for this course.</li>
          ) : (
            assignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item d-flex align-items-start justify-content-between p-3 ps-1"
              >
                <div>
                  <span className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <TfiWrite className="me-2 fs-3" />
                    <a
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} 
                      className="h5 text-dark mb-0"
                      
                    >
                      {assignment.title}
                    </a><FaRegTrashAlt onClick={() => handleConfirm(assignment._id)}
                      />
                  </span>

                  <div>
                    <a
                      href={`#/Kanbas/Courses/${cid}/Modules`}
                      className="text-danger"
                    >
                      Multiple Modules
                    </a>
                    <span className="text-muted ms-2">
                      <b>Not available until </b> {assignment.availableDate} | Due {assignment.dueDate}
                      at 11:59pm | {assignment.points} pts
                    </span>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
            ))
          )}
        </ul>
      </ul>
    </div>
  );
}
