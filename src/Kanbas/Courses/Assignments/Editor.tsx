

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addAssignment,
  addAssignment as addAssignmentAction,
  updateAssignment as updateAssignmentAction,
} from "./reducer";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Determine if we are editing an existing assignment or creating a new one
  const isEditing = Boolean(aid);

  // Use state to manage the input fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("100");
  const [assignmentGroup, setAssignmentGroup] = useState("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState("PERCENTAGE");
  const [submissionType, setSubmissionType] = useState("ONLINE");
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [untilDate, setUntilDate] = useState("");

  // State for each checkbox
  const [textEntry, setTextEntry] = useState(false);
  const [websiteURL, setWebsiteURL] = useState(false);
  const [mediaRecordings, setMediaRecordings] = useState(false);
  const [studentAnnotation, setStudentAnnotation] = useState(false);
  const [fileUploads, setFileUploads] = useState(false);

  // Fetch assignment data if editing
  useEffect(() => {
    if (isEditing && aid) {
      const fetchAssignment = async () => {
        try {
          const assignmentData = await assignmentClient.findAssignment(cid!, aid);
          // Set state with fetched data
          setTitle(assignmentData.title || "");
          setDescription(assignmentData.description || "");
          setPoints(assignmentData.points?.toString() || "100");
          setAssignmentGroup(assignmentData.assignmentGroup || "ASSIGNMENTS");
          setDisplayGradeAs(assignmentData.displayGradeAs || "PERCENTAGE");
          setSubmissionType(assignmentData.submissionType || "ONLINE");
          setDueDate(assignmentData.dueDate || "");
          setAvailableDate(assignmentData.availableDate || "");
          setUntilDate(assignmentData.untilDate || "");
          setTextEntry(assignmentData.textEntry || false);
          setWebsiteURL(assignmentData.websiteURL || false);
          setMediaRecordings(assignmentData.mediaRecordings || false);
          setStudentAnnotation(assignmentData.studentAnnotation || false);
          setFileUploads(assignmentData.fileUploads || false);
          // ... set other fields if any
        } catch (error) {
          console.error("Error fetching assignment:", error);
        }
      };
      fetchAssignment();
    }
  }, [isEditing, aid, cid]);

  // Handle Save Button Click
  const handleSave = async () => {
    try {
      const updatedAssignment = {
        _id: isEditing ? aid! : new Date().getTime().toString(),
        course: cid,
        title,
        description,
        points: parseInt(points),
        assignmentGroup,
        displayGradeAs,
        submissionType,
        dueDate,
        availableDate,
        untilDate,
        textEntry,
        websiteURL,
        mediaRecordings,
        studentAnnotation,
        fileUploads,
      };
  
      if (isEditing) {
        // Update existing assignment
        const updated = await assignmentClient.updateAssignment(aid!, updatedAssignment);
        dispatch(updateAssignmentAction(updated)); // Ensure state is in sync
      } else {
        // Create new assignment
        console.log("adding........");
        const newAssignment = await assignmentClient.createAssignment(cid!, updatedAssignment);
        console.log("Dispatching addAssignmentAction with:", newAssignment);
        
        // Dispatch addAssignment action directly
        dispatch(addAssignment(newAssignment));
        console.log("New state after dispatch:", newAssignment);
      }
  
      // Redirect to assignments list
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
  
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("There was an error saving the assignment. Please try again.");
    }
  };
  

  
    return (
      
      
      <div id="wd-assignments-editor" style={{marginLeft: "50px"}}>
        <div className="mb-3">
        <label htmlFor="wd-name">Assignment Name</label> <br />
        <input type="assignment" className="form-control mb-2"
          id="input1" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="assignment"/>

        <label htmlFor="wd-name">Assignment Description</label> <br />
        <textarea id="wd-desription" className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
         placeholder="input assignment description"/>
        </div>
    
      
        <table>
          <tr>
            <label htmlFor="wd-points">Points</label> <br />
              <input id="wd-points" className="form-control mb-1" 
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              placeholder="100" />
          </tr>
          <p></p>
          {/* Assignment Drop Down Menu*/} 
          
          
          <tr>
        
            <label htmlFor="wd-assign-to">Assignment Group</label> <br />
            
          <select id="wd-assign-to" value={assignmentGroup} 
          onChange={(e) => setAssignmentGroup(e.target.value)}>
                <option selected value="ASSIGNMENTS"> Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Project</option>
          </select>
          </tr>
         
          <p></p>
        {/* Display GRades Menu */} 
      
          <tr>
        
            <label htmlFor="wd-display-grade-as">Display Grade As</label> <br />
       
          <select id="wd-display-grade-as"
                  value={displayGradeAs}
                  onChange={(e) => setDisplayGradeAs(e.target.value)}>
                <option selected value="PERECNTAGE"> Percentage</option>
                <option value="LETTER">Letter</option>
                <option value="PASS/FAIL">Pass/Fail</option>
          </select>
          
          </tr>
       
          <p></p>
        {/*Submission Type Dropdown menu */} 
        
            <tr>
            
            <label htmlFor="wd-submission-type">Submission Type</label> <br />
         
          <select id="wd-submission-type" value={submissionType}
                  onChange={(e) => setSubmissionType(e.target.value)}>
                <option selected value="ONLINE"> Online</option>
                <option value="IN-PERSON">In Person</option>
                <option value="EMAIL">Email</option>
                <option value="EXTERNAL-WEBSITE">External Website</option>
          </select>
            </tr>
            <p></p>

            
            <tr>
      {/* Online Entry multiple entry types */}
      <label htmlFor="wd-submission-type-text-entry">Online Entry options</label> <br />

      <input
        type="checkbox"
        id="wd-submission-type-text-entry"
        checked={textEntry}
        onChange={(e) => setTextEntry(e.target.checked)}
      />
      <label htmlFor="wd-submission-type-text-entry" style={{ margin: "2px" }}>Text Entry</label>
      <br />

      <input
        type="checkbox"
        id="wd-submission-type-website-url"
        checked={websiteURL}
        onChange={(e) => setWebsiteURL(e.target.checked)}
      />
      <label htmlFor="wd-submission-type-website-url" style={{ margin: "2px" }}>Website URL</label>
      <br />

      <input
        type="checkbox"
        id="wd-submission-type-media-recordings"
        checked={mediaRecordings}
        onChange={(e) => setMediaRecordings(e.target.checked)}
      />
      <label htmlFor="wd-submission-type-media-recordings" style={{ margin: "2px" }}>Media Recordings</label>
      <br />

      <input
        type="checkbox"
        id="wd-submission-type-student-annotation"
        checked={studentAnnotation}
        onChange={(e) => setStudentAnnotation(e.target.checked)}
      />
      <label htmlFor="wd-submission-type-student-annotation" style={{ margin: "2px" }}>Student Annotation</label>
      <br />

      <input
        type="checkbox"
        id="wd-submission-type-file-uploads"
        checked={fileUploads}
        onChange={(e) => setFileUploads(e.target.checked)}
      />
      <label htmlFor="wd-submission-type-file-uploads" style={{ margin: "2px" }}>File Uploads</label>
    </tr>
          
          <p></p>
          <tr>
            {/* Assignment group Text Input*/} 
            
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input id="wd-group" className="form-control mb-1" placeholder="Everyone" />
           <p></p>
           
          </tr>

            
            <tr>
                {/* Due date of assignment */} 
                
                <label htmlFor="wd-due-date"> Due Date:</label>
                <br />
                <input type="date" id="wd-due-date" value={dueDate}  
                className="form-control mb-1"
                onChange={(e) => setDueDate(e.target.value)}>
                </input>
            </tr>

           <p></p>
           
            <tr>
                {/* Available From and Until */} 
               
                <label htmlFor="wd-due-date"> Available From </label>
                <br />
                <input type="date" id="wd-due-date" value={availableDate} 
                onChange={(e) => setAvailableDate(e.target.value)}
                className="form-control" >
                </input>

                <td align="left" valign="top"></td>
                <label htmlFor="wd-due-date">Until</label>
                <br />
                <input type="date" id="wd-due-date" value={untilDate} 
                onChange={(e) => setUntilDate(e.target.value)}
                className="form-control mb-1">
                </input>

            </tr>
            </table>
            <br />
            <br />
           <tr>
           
            <td align="right" valign="middle">

            <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-cancel-button"  className="btn btn-secondary"> cancel </Link>
            </td>
            <td align="right" valign="middle">
            <button onClick={handleSave} className="btn btn-primary"> Save</button>
            
            </td>
           
           
        </tr>
        
          
      </div>
  );}
  
  