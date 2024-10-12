import { Link, useLocation } from "react-router-dom";
import * as db from "../Database";
import "../styles.css"; // Assuming your styles are in styles.css

// Define the props type for CoursesNavigation
type CoursesNavigationProps = {
  cid: string; // Explicitly typing cid as a string
};

// add paramter of cid to this so we can pass cid and make sure url worls
export default function CoursesNavigation({ cid }: CoursesNavigationProps) {
  const location = useLocation();
  const courses = db.courses;

  // Find the course based on the passed cid
  const currentCourse = courses.find(course => course._id === cid);
  { /* For each course in courses, see if the course id matches the link cid. If found that specific id is our current course link*/}
  if (!currentCourse) {
    return <div>Course not found</div>;
  }

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={`/Kanbas/Courses/${currentCourse._id}/${link}`} // Generate the dynamic link using the course ID
          to={`/Kanbas/Courses/${currentCourse._id}/${link}`} // Set the correct path for the course
          className={`list-group-item list-group-item-action border-0 ${
            location.pathname.includes(`/Kanbas/Courses/${currentCourse._id}/${link}`) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
