

export default function AssignmentEditor() {

  // const options = [
  //   { value: "Online", label: "Online" },
  //   { value: "In Person", label: "In Person" },
  //   { value: "Link", label: "Link" },
  //   { value: "External Website", label: "External Website" },
  //   { value: "Text Entry", label: "Text Entry" },
  // ]
    return (
      
      <div id="wd-assignments-editor" style={{marginLeft: "50px"}}>
        <div className="mb-3">
        <label htmlFor="wd-name">Assignment Name</label> <br />
        <input type="assignment" className="form-control mb-2"
      id="input1" placeholder="assignment"/>

        <label htmlFor="wd-name">Assignment Description</label> <br />
        <textarea id="wd-desription" className="form-control"
         placeholder="input assignment description"/>
        </div>
    
      
        <table>
          <tr>
            <label htmlFor="wd-points">Points</label> <br />
              <input id="wd-points" className="form-control mb-1" placeholder="100" />
          </tr>
          <p></p>
          {/* Assignment Drop Down Menu*/} 
          
          
          <tr>
        
            <label htmlFor="wd-assign-to">Assignment Group</label> <br />
            
          <select id="wd-assign-to" >
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
       
          <select id="wd-display-grade-as">
                <option selected value="PERECNTAGE"> Percentage</option>
                <option value="LETTER">Letter</option>
                <option value="PASS/FAIL">Pass/Fail</option>
          </select>
          
          </tr>
       
          <p></p>
        {/*Submission Type Dropdown menu */} 
        
            <tr>
            
            <label htmlFor="wd-submission-type">Submission Type</label> <br />
         
          <select id="wd-submission-type">
                <option selected value="ONLINE"> Online</option>
                <option value="IN-PERSON">In Person</option>
                <option value="EMAIL">Email</option>
                <option value="EXTERNAL-WEBSITE">External Website</option>
          </select>
            </tr>
            <p></p>

            
          <tr>
            
            {/* Onine Entry multiple entry types*/} 
            
             <label htmlFor="wd-submission-type">Online Entry options</label> <br />
                
                
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type" style={{ margin: "2px" }}>Text Entry</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type" style={{ margin: "2px" }}>Website URL</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type" style={{ margin: "2px" }}>Media Recordings</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type" style={{ margin: "2px" }}>Student Annotation</label>
                <br />
                <input type="checkbox"id="wd-submission-type" />
                <label htmlFor="wd-submission-type" style={{ margin: "2px" }}>File Uploads</label>
            
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
                <input type="date" id="wd-due-date" value="2024-05-13"  className="form-control mb-1">
                </input>
            </tr>
           <p></p>
           
            <tr>
                {/* Available From and Until */} 
               
                <label htmlFor="wd-due-date"> Available From </label>
                <br />
                <input type="date" id="wd-due-date" value="2024-05-06" className="form-control" >
                </input>

                <td align="left" valign="top"></td>
                <label htmlFor="wd-due-date">Until</label>
                <br />
                <input type="date" id="wd-due-date" value="2024-05-20" className="form-control mb-1">
                </input>

            </tr>
            </table>
            <br />
            <br />
           <tr>
           
            <td align="right" valign="middle">
            <button id="wd-cancel-button"  className="btn btn-secondary"> cancel </button>
            </td>
            <td align="right" valign="middle">
            <button id="wd-save-button" onClick={() => alert("Assignment Saved")} type="button" className="btn btn-secondary"> save </button>
            </td>
           
        </tr>
        
          
      </div>
  );}
  
  