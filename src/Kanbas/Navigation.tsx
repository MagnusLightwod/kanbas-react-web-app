import {  NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";

import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function KanbasNavigation() {
  // list of path names
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    // { label: "Users",     path: "/Kanbas/Account/users", icon: FaPeopleGroup}
  ];

  console.log("About to get current user");
  // let it be empty until sign in, else causes an error since it trys to load navigations and getting current user for "users" breaks
  const { currentUser } = useSelector((state: any) => state.accountReducer || {});

console.log("Current user role:", currentUser ? currentUser.role : "No user found");
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }} 
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">

      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        rel="noopener noreferrer"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" />
      </a>

      {/* Account Link */}
      <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
          ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>

      {/* Loop through the general links */}
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
            ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}

{currentUser && currentUser.role === "ADMIN" && (
  
  <Link to="/Kanbas/Account/Users" className={`list-group-item bg-black text-center border-0
      ${pathname.includes("Users") ? "text-danger bg-white" : "text-white bg-black"}`}>
    <FaPeopleGroup className="fs-1 text-danger" />
    <br />
    Users
  </Link>
)}


    </div>
  );
}