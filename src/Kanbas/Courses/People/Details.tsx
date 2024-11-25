import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck, FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import * as client from "../../Account/client";



export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [editingName, setEditingName] = useState(false);
    const [editingRole, setEditingRole] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const navigate = useNavigate();
  
    const deleteUser = async (uid: string) => {
      await client.deleteUser(uid);
      navigate(-1);
    };
  
    const fetchUser = async () => {
      if (!uid) return;
      const user = await client.findUserById(uid);
      setUser(user);
      setName(`${user.firstName} ${user.lastName}`);
      setEmail(user.email);
      setRole(user.role);
    };
  
    useEffect(() => {
      if (uid) {
        fetchUser();
      }
    }, [uid]);
  
    if (!uid) return null;
  
    // Save name changes
    const saveName = async () => {
      const [firstName, lastName] = name.split(" ");
      const updatedUser = { ...user, firstName, lastName };
      await client.updateUser( updatedUser);
      setUser(updatedUser);
      setEditingName(false);
    };
  
    // Save email changes
    const saveEmail = async () => {
      const updatedUser = { ...user, email };
      await client.updateUser( updatedUser);
      setUser(updatedUser);
      setEditingEmail(false);
    };
  
    // Save role changes
    const saveRole = async () => {
      const updatedUser = { ...user, role };
      await client.updateUser(updatedUser);
      setUser(updatedUser);
      setEditingRole(false);
    };
  
    return (
      <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
        <button
          onClick={() => navigate(-1)}
          className="btn position-fixed end-0 top-0 wd-close-details"
        >
          <IoCloseSharp className="fs-1" />
        </button>
        <div className="text-center mt-2">
          <FaUserCircle className="text-secondary me-2 fs-1" />
        </div>
        <hr />
        <div className="text-danger fs-4 wd-name">
          {user.firstName} {user.lastName}
        </div>
        <b>Roles:</b> <span className="wd-roles">{user.role}</span> <br />
        <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
        <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
        <b>Total Activity:</b>{" "}
        <span className="wd-total-activity">{user.totalActivity}</span>
        <hr />
  
        {/* Editing Name */}
        <div className="text-danger fs-4">
          {!editingName ? (
            <>
              <FaPencil
                onClick={() => setEditingName(true)}
                className="float-end fs-5 mt-2 wd-edit"
              />
              <div className="wd-name" onClick={() => setEditingName(true)}>
                {user.firstName} {user.lastName}
              </div>
            </>
          ) : (
            <>
              <FaCheck
                onClick={() => saveName()}
                className="float-end fs-5 mt-2 me-2 wd-save"
              />
              <input
                className="form-control w-50 wd-edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveName();
                  }
                }}
              />
            </>
          )}
        </div>
  
        {/* Editing Email */}
        <div className="text-danger fs-4 wd-email">
          {!editingEmail ? (
            <>
              <FaPencil
                onClick={() => setEditingEmail(true)}
                className="float-end fs-5 mt-2 wd-edit"
              />
              <div className="wd-email-value" onClick={() => setEditingEmail(true)}>
                {user.email}
              </div>
            </>
          ) : (
            <>
              <FaCheck
                onClick={() => saveEmail()}
                className="float-end fs-5 mt-2 me-2 wd-save"
              />
              <input
                className="form-control w-50 wd-edit-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveEmail();
                  }
                }}
              />
            </>
          )}
        </div>
  
        {/* Editing Role */}
        <div className="text-danger fs-4 wd-role">
          {!editingRole ? (
            <>
              <FaPencil
                onClick={() => setEditingRole(true)}
                className="float-end fs-5 mt-2 wd-edit"
              />
              <div className="wd-role-value" onClick={() => setEditingRole(true)}>
                {user.role}
              </div>
            </>
          ) : (
            <>
              <FaCheck
                onClick={() => saveRole()}
                className="float-end fs-5 mt-2 me-2 wd-save"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-control w-50 wd-edit-role"
              >
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
              </select>
            </>
          )}
        </div>
  
        <br />
        {/* Cancel and delete buttons */}
        <button
          onClick={() => deleteUser(uid)}
          className="btn btn-danger float-end wd-delete"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary float-start float-end me-2 wd-cancel"
        >
          Cancel
        </button>
      </div>
    );
  }