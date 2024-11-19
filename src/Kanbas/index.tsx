import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import "./styles.css";
import AssignmentEditor from "./Courses/Assignments/Editor";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { useSelector } from "react-redux";

export default function Kanbas() {
  console.log("Kanbas component hit");
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // Centralized fetch courses logic here
  const fetchCourses = async () => {
    try {
      console.log("Kanbas index fetching courses");
      if (currentUser.role === "FACULTY") {
        // Faculty should see all courses by default
        const allCourses = await courseClient.fetchAllCourses();
        setCourses(allCourses);
      } else {
        const enrolledCourses = await userClient.findMyCourses();
        setCourses(enrolledCourses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error adding new course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      const status = await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
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
    <Session>
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
              <Route
                path="/Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      setCourses={setCourses}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={courses} />
                  </ProtectedRoute>
                }
              />

              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />

              {/* Assignments Routes */}
              <Route
                path="/Kanbas/Courses/:cid/Assignments/New"
                element={<AssignmentEditor />}
              />
              <Route
                path="/Kanbas/Courses/:cid/Assignments/:aid"
                element={<AssignmentEditor />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Session>
  );
}
