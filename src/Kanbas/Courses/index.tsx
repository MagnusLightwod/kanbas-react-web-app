import CoursesNavigation from "./nav2";

import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments/index2";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation  } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizes from "./Quizzes";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams<{ cid: string }>(); // Make sure cid is of type string
  const { pathname } = useLocation();
  // Check if cid exists and if the course exists in the database
  const course = courses.find((course) => course._id === cid);

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
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            {/* Add route for the quizzes page */}
            <Route path="Quizzes" element={<Quizes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
