import e from "cors";
import * as dao from "./dao.js";  // Import the data access object for courses
import express from "express";

export default function CourseRoutes(app) {
    // Route to find all courses
    app.get("/api/courses", (req, res) => {
        try {
            const courses = dao.findAllCourses();  // Call DAO to get all courses
            res.status(200).json(courses);  // Send back the courses as JSON with 200 status
        } catch (error) {
            console.error("Error fetching courses: ", error);
            res.status(500).send("Error fetching courses");
        }
    });

    // Route to find courses for a specific enrolled user
    app.get("/api/users/:userId/courses", (req, res) => {
        try {
            let { userId } = req.params;
            console.log("Users Route enters to find courses for enrolled user");

            if (userId === "current") {
                console.log("userId == current");
                const currentUser = req.session["currentUser"];
                console.log("Current user data below when finding enrolled courses");
                console.log(currentUser);
                if (!currentUser) {
                    console.log("Not current user, return status 401");
                    res.sendStatus(401);
                    return;
                }
                userId = currentUser._id;
            }

            const courses = dao.findCoursesForEnrolledUser(userId);
            res.status(200).json(courses);
        } catch (error) {
            console.error("Error finding courses for user: ", error);
            res.status(500).send("Error finding courses for user");
        }
    });

    // Route to create a new course (for faculty)
    app.post("/api/users/current/courses", (req, res) => {
        try {
            const currentUser = req.session["currentUser"];
            if (!currentUser || currentUser.role !== "FACULTY") {
                res.status(403).send("Unauthorized: Only faculty can create courses");
                return;
            }

            const newCourse = dao.createCourse(req.body);
            dao.enrollUserInCourse(currentUser._id, newCourse._id); // Enroll faculty in the created course
            res.status(201).json(newCourse);
        } catch (error) {
            console.error("Error creating course: ", error);
            res.status(500).send("Error creating course");
        }
    });

    // Route to delete a specific course by ID
    app.delete("/api/courses/:courseId", (req, res) => {
        try {
            const { courseId } = req.params;
            const currentUser = req.session["currentUser"];
            if (!currentUser || currentUser.role !== "FACULTY") {
                res.status(403).send("Unauthorized: Only faculty can delete courses");
                return;
            }

            dao.deleteCourse(courseId);
            res.sendStatus(204);  // Successful deletion returns a 204 status
        } catch (error) {
            console.error("Error deleting course: ", error);
            res.status(500).send("Error deleting course");
        }
    });

    app.put("/api/courses/:courseId", (req, res) => {
        const { courseId } = req.params;
        const courseUpdates = req.body;
        const status = dao.updateCourse(courseId, courseUpdates);
        res.send(status);
      });
    
}
