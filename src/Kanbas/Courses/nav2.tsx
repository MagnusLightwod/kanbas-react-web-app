import { Link, useLocation } from "react-router-dom";
import * as db from "../Database";
import { useState, useEffect } from "react";
import "../styles.css"; // Assuming your styles are in styles.css
import * as courseClient from "./client";

// Define the props type for CoursesNavigation
type CoursesNavigationProps = {
  cid: string; // Explicitly typing cid as a string
};

// Define the Course type
type Course = {
  _id: string;
  name: string;
  number: string;
  description: string;
  credits: number;
};

// add parameter of cid to this so we can pass cid and make sure URL works
export default function CoursesNavigation({ cid }: CoursesNavigationProps) {
  const location = useLocation();
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);

 
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (cid) {
          const course = await courseClient.findCourseById(cid);
          console.log("....current course in nav2....:", course);
          setCurrentCourse(course);
        }
      } catch (err) {
        console.error("Error fetching course:", err);
      }
    };

    fetchCourse();
  }, [cid]);

  if (!currentCourse) {
    return <div>Loading...</div>;
  }

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-course-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={`/Kanbas/Courses/${currentCourse._id}/${link}`} // Generate the dynamic link using the course ID
          to={`/Kanbas/Courses/${currentCourse._id}/${link}`} // Set the correct path for the course
          className={`list-group-item list-group-item-action border-0 ${
            location.pathname.includes(`/Kanbas/Courses/${currentCourse._id}/${link}`)
              ? "active"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
