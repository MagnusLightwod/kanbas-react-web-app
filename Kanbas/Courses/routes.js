import * as dao from "./dao.js";
export default function CourseRoutes(app) {
    // find courses
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });

  // delete a course given the id, add method to src kanbas coruses client
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(204);
  });

}
