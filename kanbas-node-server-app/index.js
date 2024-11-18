import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "../Kanbas/Users/routes.js";
// import CourseRoutes from "../Kanbas/Courses/routes.js";
// import ModuleRoutes from '../Kanbas/Modules/routes.js';
const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // Allow requests from your client
  })); 
app.use(express.json()); // allows for json and http request bodys to send data securely 
UserRoutes(app);
// ModuleRoutes(app);

// CourseRoutes(app); // course available only using our api. 
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000)