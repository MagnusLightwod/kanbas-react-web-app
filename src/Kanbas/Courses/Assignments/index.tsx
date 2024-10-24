import { useNavigate, useParams } from "react-router";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import ModuleControlButtons from "../Modules/ModuleControlbuttons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Get course ID from URL
  const navigate = useNavigate(); // Initialize navigate function

  const assignments = db.assiginments; // Fetch assignments from the Database

  // Filter assignments for the specific course based on cid
  const filteredAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleAddAssignment = () => {
    navigate(`New`); // Use relative path within the course context
  };

  return (
    <div id="wd-modules-controls" className="text-nowrap wd-margin-right-left">
      <ul id="wd-modules" className="list-group rounded-0 wd-margin-right-left">
        {/* Search and Button Controls */}
        <div className="input-group mb-2">
          <span className="input-group-text bg-white border-end-0">
            <IoMdSearch />
          </span>
          <input
            id="wd-search-assignment"
            placeholder="Search..."
            className="form-control border-start-0"
          />
          <div>
            <button
              id="wd-collapse-all"
              className="btn btn-lg btn-secondary wd-margin-right-left"
              type="button"
              style={{ bottom: "1px" }}
            >
              Group
            </button>
            <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-danger me-1"
              onClick={ handleAddAssignment} // Set the click handler
            >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignments
            </button>
          </div>
        </div>

        {/* Assignments Section */}
        <div
          className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center"
        >
          <span>
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
          </span>

          {/* Example placeholder for ModuleControlButtons */}
          <ModuleControlButtons
            moduleId="exampleModuleId"
            deleteModule={() => {}}
            editModule={() => {}}
          />
        </div>

        <ul className="wd-lessons list-group rounded-0">
          {filteredAssignments.length === 0 ? (
            <li>No assignments available for this course.</li>
          ) : (
            filteredAssignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item d-flex align-items-start justify-content-between p-3 ps-1"
              >
                <div>
                  <span className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <TfiWrite className="me-2 fs-3" />
                    <a
                      href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="h5 text-dark mb-0"
                    >
                      {assignment.title}
                    </a>
                  </span>

                  <div>
                    <a
                      href={`#/Kanbas/Courses/${cid}/Modules`}
                      className="text-danger"
                    >
                      Multiple Modules
                    </a>
                    <span className="text-muted ms-2">
                      <b>Not available until </b> May 6 at 12:00 am | Due May 20 at
                      11:59pm | 100 pts
                    </span>
                  </div>
                </div>
                <LessonControlButtons />
              </li>
            ))
          )}
        </ul>
      </ul>
    </div>
  );
}
 // checked for if we are editing, and we make it so New works, before it would break since it is not a proper uid
 