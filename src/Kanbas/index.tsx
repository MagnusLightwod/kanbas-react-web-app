import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import * as db from "./Database";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";

import store from "./store";
import { Provider } from "react-redux";

import Assignments from "./Courses/Assignments"; // Fixed import path
import AssignmentEditor from "./Courses/Assignments/Editor";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

    return (
      <Provider store={ store }>
      <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 col-lg-2 col-xl-1 p-0">
          <KanbasNavigation />
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-lg-10 col-xl-11 pt-3">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
            <ProtectedRoute><Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/></ProtectedRoute>
          }/>


            <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />

            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
     
           {/* Assignments Routes */}
          
              <Route path="/Kanbas/Courses/:cid/Assignments/New" element={<AssignmentEditor />} />
              <Route path="/Kanbas/Courses/:cid/Assignments/:aid" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
    </Provider>
  );}
  