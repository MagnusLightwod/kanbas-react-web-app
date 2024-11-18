import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "../Kanbas/Users/routes.js";
import session from "express-session";
import "dotenv/config";
import CourseRoutes from "../Kanbas/Courses/routes.js";
// import CourseRoutes from "../Kanbas/Courses/routes.js";
// import ModuleRoutes from '../Kanbas/Modules/routes.js';
const app = express();

app.use(cors({
    origin: process.env.NETLIFY_URL || "http://localhost:3000", // Allow requests from your client
    credentials: true // If you're using cookies or other authentication like sessions
  })); 

  const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  
app.use(
  session(sessionOptions)
);

app.use(express.json()); // allows for json and http request bodys to send data securely 
UserRoutes(app);
// ModuleRoutes(app);

CourseRoutes(app); // course available only using our api. 
Lab5(app);
Hello(app)

app.listen(process.env.PORT || 4000)