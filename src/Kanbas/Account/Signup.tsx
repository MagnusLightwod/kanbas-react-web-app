import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input id="wd-name"
             placeholder="First Name"
             className="form-control mb-2"/>
      <input id="wd-last-name"
             placeholder="Last Name"
             className="form-control mb-2"/>

      <input id="wd-middle-name"
             placeholder="Middle Name (optional)"
             className="form-control mb-2"/>
      <input id="wd-password"
             placeholder="password" type="password"
             className="form-control mb-2"/>
      
      <input type="date"
      id="wd-text-fields-dob"
      value="2000-01-11"
      className="form-control mb-2"/>

      <input id="wd-email"
             placeholder="email" 
             className="form-control mb-2"/>

<input id="wd-user-name"
             placeholder="User name"
             className="form-control mb-2"/>

      <Link id="wd-signup-btn"
            to="/Kanbas/Account/Profile"
            className="btn btn-primary w-100">
            Sign up </Link>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signin">Sign in</Link>
    </div>
);}
