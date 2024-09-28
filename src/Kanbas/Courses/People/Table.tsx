import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
            {/* Student 2 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Christopher</span>{" "}
              <span className="wd-last-name">Alcantara</span>
            </td>
            <td className="wd-login-id">001392071S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:24:32</td>
          </tr>

          {/* Student 3 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Kent</span>{" "}
              <span className="wd-last-name">Clark</span>
            </td>
            <td className="wd-login-id">001837291S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">T.A.</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:22:12</td>
          </tr>

          {/* Student 4 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Matthew</span>{" "}
              <span className="wd-last-name">Patrick</span>
            </td>
            <td className="wd-login-id">001392071S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TEACHER</td>
            <td className="wd-last-activity">2020-10-2</td>
            <td className="wd-total-activity">01:30:00</td>
          </tr>
          
        </tbody>
      </table>
    </div>
);}
