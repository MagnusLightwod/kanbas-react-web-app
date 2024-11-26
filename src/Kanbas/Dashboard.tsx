import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEnrollments } from "./redux/reducer";
import * as client from "./Account/client";
import * as courseClient from "./Courses/client";
import * as enrollmentClient from "./Courses/enrollmentclient";
import { enrollUserInCourse, unenrollUserFromCourse } from "./Courses/enrollmentclient";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
  enrolling,
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
  enrolling: boolean; 
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void ;
})  {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  // Fetch enrollments from the server
  const fetchEnrollments = async () => {
    if (currentUser && currentUser._id) {
      try {
        let enrollments = await enrollmentClient.fetchEnrollments(currentUser._id);
        console.log("Fetched enrollments:", enrollments);

        // Ensure enrollments is an array
        enrollments = Array.isArray(enrollments) ? enrollments : [];

        const mappedEnrollments = enrollments.map((enrollment: any) => ({
          ...enrollment,
          userId: currentUser._id,
          courseId: enrollment._id,
        }));

        dispatch(setEnrollments(mappedEnrollments));

        // Update the enrolled courses state
        const enrolledCourseIds = mappedEnrollments.map((enrollment: any) => enrollment.courseId);
        const updatedEnrolledCourses = courses.filter((course) =>
          enrolledCourseIds.includes(course._id)
        );
        setEnrolledCourses(updatedEnrolledCourses);

      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    }
  };

  // Fetch all courses for the user
  const fetchCourses = async () => {
    try {
      if (currentUser.role === "FACULTY") {
        // Faculty should see all courses by default
        const allCourses = await courseClient.fetchAllCourses();
        setCourses(allCourses);
      } else {
        const enrolledCourses = await client.findCoursesForUser(currentUser._id);
        setCourses(enrolledCourses);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Fetch courses and enrollments whenever the component mounts or enroll status changes
  useEffect(() => {
    if (currentUser) {
      fetchCourses();
      fetchEnrollments();
      
    }
  }, [currentUser, enrolling]);

  // Function to handle enrollment button clicks
  const handleEnrollment = async (course: any, enrolled: boolean) => {
    try {
      if (enrolled) {
        await unenrollUserFromCourse(course._id);
      } else {
        await enrollUserInCourse(course._id);
      }
      // Re-fetch courses and enrollments to update the UI
      fetchCourses();
      fetchEnrollments();
    } catch (error) {
      console.error(`Failed to ${enrolled ? 'unenroll' : 'enroll'} user in course:`, error);
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary">
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />
      {currentUser.role === "FACULTY" ? (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      ) : null}

      <h2 id="wd-dashboard-published">
        {enrolling ? "All Courses" : "Published Courses"} ({courses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
              key={course._id}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src={`/images/${course.image}`}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>

                    {/* Render enroll/unroll options for students */}
                    {currentUser.role !== "FACULTY" && enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          handleEnrollment(course, course.enrolled);
                        }}
                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}

                    {/* Render edit/delete options for faculty */}
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
