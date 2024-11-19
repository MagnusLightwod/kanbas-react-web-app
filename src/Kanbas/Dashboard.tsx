import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCourseEnrollment, selectUserEnrollments } from "./redux/reducer";
import * as client from "./Account/client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourses,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  setCourses: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) =>
    selectUserEnrollments(state, currentUser._id)
  ); // Use selector to get enrollments for the current user
  const dispatch = useDispatch();

  // Toggle to show all courses
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Handle toggle of "Show All Courses" button
  const toggleShowCourses = () => {
    setShowAllCourses(!showAllCourses);
    if (!showAllCourses) {
      // When toggling to show all, fetch all courses
      client
        .findMyCourses()
        .then((allCourses) => setCourses(allCourses))
        .catch((err) => console.error("Error fetching all courses:", err));
    }
  };

  // Handle enrollment
  const enroll = (course: any) => {
    dispatch(
      setCourseEnrollment({
        userId: currentUser._id,
        courseId: course._id,
        enroll: true,
      })
    );
  };

  // Handle unenrollment
  const unenroll = (courseId: string) => {
    dispatch(
      setCourseEnrollment({
        userId: currentUser._id,
        courseId: courseId,
        enroll: false,
      })
    );
  };

  // Filter courses based on user's role or selection
  const filteredCourses = courses.filter((course) => {
    if (currentUser.role === "FACULTY") {
      return true;
    } else if (showAllCourses) {
      return true;
    } else {
      return enrollments.some(
        (enrollment: any) => enrollment.courseId === course._id
      );
    }
  });

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      ) : (
        <button className="btn btn-primary float-end" onClick={toggleShowCourses}>
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {filteredCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
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

                    {/* Render options for faculty and students */}
                    {currentUser.role === "FACULTY" ? (
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
                    ) : (
                      <>
                        {enrollments.some(
                          (enrollment: any) => enrollment.courseId === course._id
                        ) ? (
                          <button
                            onClick={() => unenroll(course._id)}
                            className="btn btn-danger float-end"
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            onClick={() => enroll(course)}
                            className="btn btn-success float-end"
                          >
                            Enroll
                          </button>
                        )}
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
