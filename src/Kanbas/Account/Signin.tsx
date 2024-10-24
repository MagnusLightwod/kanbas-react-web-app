
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // looks for users and sees if there username exists and passwssord is correct. 
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  // below we have a credentials which is an array of user name and password. on change we set the suer name and password to the change in the state beign our input. 
  return (
    <div id="wd-signin-screen">
    <h1>Sign in</h1>
    <input defaultValue={credentials.username}
           onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
           className="form-control mb-2" placeholder="username" id="wd-username" />
    <input defaultValue={credentials.password}
           onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
           className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
    <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
    <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
   
  </div>


);}

