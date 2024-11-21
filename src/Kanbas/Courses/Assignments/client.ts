import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// i think this is right but duble check incase of needing course id again here
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;