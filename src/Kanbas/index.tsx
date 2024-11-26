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
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { useSelector } from "react-redux";

export default function Kanbas() {
  //console.log("Kanbas component hit");
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  // // Fetch courses function
  // const fetchCourses = async () => {
  //   try {
  //     //console.log("Kanbas index fetching courses");
  //     if (currentUser.role === "FACULTY") {
  //       // Faculty should see all courses by default
  //       const allCourses = await courseClient.fetchAllCourses();
  //       setCourses(allCourses);
  //     } else {
  //       const enrolledCourses = await courseClient.findMyCourses();
  //       setCourses(enrolledCourses);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching courses:", error);
  //   }
  // };

  // Fetch courses when component mounts or currentUser changes

  // Initial course state for creating or updating a course
  const [course, setCourse] = useState<any>({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  
  // Function that gets called when clicking the edit button in the Dashboard component
  const handleEditCourse = (selectedCourse: any) => {
    setCourse(selectedCourse);
  };
  

  // Add new course functionupda
  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error adding new course:", error);
    }
  };

  // Delete course function
  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // Update course function
  const updateCourse = async () => {
    try {
      console.log(`Attempting to update course with ID: ${course._id}`);
      const updatedCourse = await courseClient.updateCourse(course);

      // Update local state with the updated course
      setCourses((prevCourses) =>
        prevCourses.map((c) => (c._id === updatedCourse._id ? updatedCourse : c))
      );
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };


  // useEffect(() => {
  //   if (currentUser) {
  //     fetchCourses();
  //   }
  // }, [currentUser]);


  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
 
 const updateEnrollment = async (courseId: string, enrolled: boolean) => {
   if (enrolled) {
     await userClient.enrollIntoCourse(currentUser._id, courseId);
   } else {
     await userClient.unenrollFromCourse(currentUser._id, courseId);
   }
   setCourses(
     courses.map((course) => {
       if (course._id === courseId) {
         return { ...course, enrolled: enrolled };
       } else {
         return course;
       }
     })
   );
 };

 useEffect(() => {
  if (enrolling) {
    fetchCourses();
  } else {
    findCoursesForUser();
  }
}, [currentUser, enrolling]);


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
                      setCourse={handleEditCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      setCourses={setCourses}
                      enrolling={enrolling}
                      setEnrolling={setEnrolling}
                      updateEnrollment={updateEnrollment}
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
