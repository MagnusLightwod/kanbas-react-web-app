

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.

           {/* Points input */} 
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
              </td>
            
            
          </tr>
          <p></p>
          {/* Assignment Drop Down Menu*/} 
          
          
          <tr>
          <td align="left" valign="top"> 
            <label htmlFor="wd-assign-to">Assignment Group</label>
            </td>
          <select id="wd-assign-to">
                <option selected value="ASSIGNMENTS"> Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Project</option>
          </select>
          </tr>
         
          <p></p>
        {/* Display GRades Menu */} 
      
          <tr>
          <td align="right" valign="middle">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
          <select id="wd-display-grade-as">
                <option selected value="PERECNTAGE"> Percentage</option>
                <option value="LETTER">Letter</option>
                <option value="PASS/FAIL">Pass/Fail</option>
          </select>
          </tr>
       
          <p></p>
        {/*Submission Type Dropdown menu */} 
        
            <tr>
            <td align="right" valign="middle">
            <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
          <select id="wd-submission-type">
                <option selected value="ONLINE"> Online</option>
                <option value="IN-PERSON">In Person</option>
                <option value="EMAIL">Email</option>
                <option value="EXTERNAL-WEBSITE">External Website</option>
          </select>
            </tr>
            

            
          <tr>
            
            {/* Onine Entry multiple entry types*/} 
            <td align="left" valign="top"></td>
                <label htmlFor="wd-submission-type">Online Entry Options</label> 
                <br />
                
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type">Text Entry</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type">Website URL</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type">Media Recordings</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type">Student Annotation</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type">File Uploads</label>
            
          </tr>
          
          <p></p>
          <tr>
            {/* Assignment group Text Input*/} 
            <td align="left" valign="top"></td>
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input type="group" placeholder="Everyone" id="wd-assign-to">
            </input>
           <p></p>
           
          </tr>

            
            <tr>
                {/* Due date of assignment */} 
                <td align="left" valign="top"></td>
                <label htmlFor="wd-due-date"> Due Date:</label>
                <br />
                <input type="date" id="wd-due-date" value="2024-05-13">
                </input>
            </tr>
           <p></p>
           
            <tr>
                {/* Available From and Until */} 
                <td align="right" valign="top"></td>
                <label htmlFor="wd-due-date"> Available From </label>
                <br />
                <input type="date" id="wd-due-date" value="2024-05-06">
                </input>

                <td align="left" valign="top"></td>
                <label htmlFor="wd-due-date">Until</label>
                <br />
                <input type="date" id="wd-due-date" value="2024-05-20">
                </input>

            </tr>
            </table>
            <br />
            <br />
           <tr>
           
            <td align="right" valign="middle">
            <button id="wd-cancel-button"> cancel </button>
            </td>
            <td align="right" valign="middle">
            <button id="wd-save-button" onClick={() => alert("Assignment Saved")} type="button"> save </button>
            </td>
           
        </tr>
        
          
      </div>
  );}
  
  