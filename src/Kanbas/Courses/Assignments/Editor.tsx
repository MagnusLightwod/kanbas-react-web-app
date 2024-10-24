import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database"; // Assuming assignments data is in Database

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>(); // Get course ID and assignment ID from the URL
  const assignments = db.assiginments;

  // Find the selected assignment based on the ID from the URL
  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  // Determine if we are editing an existing assignment or creating a new one
  const isEditing = Boolean(aid);

  // Use state to manage the input fields
  const [title, setTitle] = useState(isEditing ? assignment?.title || "" : "");
  const [description, setDescription] = useState(isEditing ? assignment?.description || "" : "");
  const [points, setPoints] = useState(isEditing ? assignment?.points?.toString() || "100" : "100");
  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState("PERCENTAGE");
  const [submissionType, setSubmissionType] = useState("ONLINE");
  const [dueDate, setDueDate] = useState(isEditing ? assignment?.dueDate || "2024-05-13" : "");
  const [availableDate, setAvailableDate] = useState(isEditing ? assignment?.availableDate || "2024-05-06" : "");
  const [untilDate, setUntilDate] = useState(isEditing ? assignment?.untilDate || "2024-05-20" : "");

  // State for each checkbox
  const [textEntry, setTextEntry] = useState(false);
  const [websiteURL, setWebsiteURL] = useState(false);
  const [mediaRecordings, setMediaRecordings] = useState(false);
  const [studentAnnotation, setStudentAnnotation] = useState(false);
  const [fileUploads, setFileUploads] = useState(false);

  return (
    <div id="wd-assignments-editor" style={{ marginLeft: "50px" }}>
      <div className="mb-3">
        <label htmlFor="wd-name">Assignment Name</label> <br />
        <input
          type="text"
          className="form-control mb-2"
          id="input1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Assignment name"
        />

        <label htmlFor="wd-description">Assignment Description</label> <br />
        <textarea
          id="wd-description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Input assignment description"
        />
      </div>

      <table>
        <tr>
          <label htmlFor="wd-points">Points</label> <br />
          <input
            id="wd-points"
            className="form-control mb-1"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder="100"
          />
        </tr>
        <p></p>

        {/* Assignment Drop Down Menu */}
        <tr>
          <label htmlFor="wd-assign-to">Assignment Group</label> <br />
          <select
            id="wd-assign-to"
            value={assignmentGroup}
            onChange={(e) => setAssignmentGroup(e.target.value)}
          >
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="PROJECT">Project</option>
          </select>
        </tr>
        <p></p>

        {/* Display Grades Menu */}
        <tr>
          <label htmlFor="wd-display-grade-as">Display Grade As</label> <br />
          <select
            id="wd-display-grade-as"
            value={displayGradeAs}
            onChange={(e) => setDisplayGradeAs(e.target.value)}
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="LETTER">Letter</option>
            <option value="PASS/FAIL">Pass/Fail</option>
          </select>
        </tr>
        <p></p>

        {/* Submission Type Dropdown Menu */}
        <tr>
          <label htmlFor="wd-submission-type">Submission Type</label> <br />
          <select
            id="wd-submission-type"
            value={submissionType}
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option value="ONLINE">Online</option>
            <option value="IN-PERSON">In Person</option>
            <option value="EMAIL">Email</option>
            <option value="EXTERNAL-WEBSITE">External Website</option>
          </select>
        </tr>
        <p></p>

        {/* Online Entry Multiple Entry Types */}
        <tr>
          <label htmlFor="wd-submission-type-text-entry">Online Entry Options</label> <br />
          <input
            type="checkbox"
            id="wd-submission-type-text-entry"
            checked={textEntry}
            onChange={(e) => setTextEntry(e.target.checked)}
          />
          <label htmlFor="wd-submission-type-text-entry" style={{ margin: "2px" }}>
            Text Entry
          </label>
          <br />
          {/* Add other checkboxes similarly */}
        </tr>
        <p></p>

        {/* Due Date of Assignment */}
        <tr>
          <label htmlFor="wd-due-date">Due Date:</label>
          <br />
          <input
            type="date"
            id="wd-due-date"
            value={dueDate}
            className="form-control mb-1"
            onChange={(e) => setDueDate(e.target.value)}
          />
        </tr>
        <p></p>

        {/* Available From and Until */}
        <tr>
          <label htmlFor="wd-available-date">Available From</label>
          <br />
          <input
            type="date"
            id="wd-available-date"
            value={availableDate}
            onChange={(e) => setAvailableDate(e.target.value)}
            className="form-control"
          />
          <td align="left" valign="top"></td>
          <label htmlFor="wd-until-date">Until</label>
          <br />
          <input
            type="date"
            id="wd-until-date"
            value={untilDate}
            onChange={(e) => setUntilDate(e.target.value)}
            className="form-control mb-1"
          />
        </tr>
      </table>
      <br />
      <tr>
        <td align="right" valign="middle">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            id="wd-cancel-button"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </td>
        <td align="right" valign="middle">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            id="wd-save-button"
            className="btn btn-secondary"
          >
            Save
          </Link>
        </td>
      </tr>
    </div>
  );
}
