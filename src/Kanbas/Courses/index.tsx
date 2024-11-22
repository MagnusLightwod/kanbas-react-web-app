import CoursesNavigation from "./nav2";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizes from "./Quizzes";
import { useState } from "react";
import * as db from "../Database"; // Assuming the initial data is from Database

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams<{ cid: string }>(); // Make sure cid is of type string
  const { pathname } = useLocation();

  // Check if cid exists and if the course exists in the database
  const course = courses.find((course) => course._id === cid);

  // Manage assignments state at the Courses level
  // const [assignments, setAssignments] = useState(db.assiginments);

  // // Function to save a new assignment

 

  //  // Function to delete an assignment
  //  const deleteAssignment = (assignmentId: string) => {
  //   setAssignments((prevAssignments) =>
  //     prevAssignments.filter((assignment) => assignment._id !== assignmentId)
  //   );
  // };

  // // Function to save a new assignment or update an existing one
  // const saveAssignment = (updatedAssignment: any) => {
  //   setAssignments((prevAssignments) => {
  //     const existingAssignmentIndex = prevAssignments.findIndex(
  //       (assignment) => assignment._id === updatedAssignment._id
  //     );

  //     // If editing an existing assignment
  //     if (existingAssignmentIndex !== -1) {
  //       return prevAssignments.map((assignment, index) =>
  //         index === existingAssignmentIndex ? updatedAssignment : assignment
  //       );
  //     }
  //     // If adding a new assignment
  //     return [...prevAssignments, updatedAssignment];
  //   });
  // };

  if (!cid || !course) {
    return <div>Course not found</div>; // Handle missing or invalid course ID
  }
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          {/* Pass the course ID to CoursesNavigation, ensuring it's a string */}
          <CoursesNavigation cid={cid} />
        </div>
        <div className="flex-fill">
          <Routes>
            {/* Relative routes within the Courses */}
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/New" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}