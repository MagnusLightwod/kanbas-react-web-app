import { Link, useLocation } from "react-router-dom";
import "../styles.css"; // Assuming your styles are in styles.css

{/* Create an array to store the to links, ids and labels. 
  Then render those links on the side bar. Where the active is highlighted having black text*/}
export default function CoursesNavigation() {
  const location = useLocation();

  const menuLinks = [
    { to: "/Kanbas/Courses/1234/Home", id: "wd-course-home-link", label: "Home"},

    { to:  "/Kanbas/Courses/1234/Modules", id: "wd-course-modules-link", label:"Modules"},

    { to: "/Kanbas/Courses/1234/Piazza", id: "wd-course-piazza-link", label:"Piazza"},

    { to: "/Kanbas/Courses/1234/Zoom", id: "wd-course-zoom-link", label:"Zoom"},

    { to: "/Kanbas/Courses/1234/Assignments", id: "wd-course-assignments-link", label:"Assignments"},

    { to: "/Kanbas/Courses/1234/Quizzes", id: "wd-course-quizzes-link", label:"Quizzes"},

    { to: "/Kanbas/Courses/1234/People", id: "wd-course-people-link", label:"People"},
  ];

  return( 
    <div id="wd-course-naviation" className="wd list-group fs-5 rounded-0">
      {menuLinks.map((menuLinks) => (
        <Link
        
          key={menuLinks.id} 
          to={menuLinks.to}  
          id={menuLinks.id} 
          className={`list-group-item list-group-item-action border-0 ${
            location.pathname === menuLinks.to ? "active" : "text-danger"
          }`}>
          {menuLinks.label}
        </Link>
      ))}
    </div>
  );
}

{/*to= where to link to */}
{/*${} essentially goes and maps the link to each of the items in the list, then also adds the active and text=danger options for when clicked. Putting this after border-0 means the active or text-danger value is added towards the end */}
{/* 
  list-group-item: A Bootstrap class that styles the element as a list group item.
list-group-item-action: Makes the entire list item clickable and adds hover and active styles.
border-0: removes border from button
 location.pathname === menuLinks.to : Checks if path name is same as to: and makes it active
  {menuLinks.label} render the actual button based on the label
*/}
