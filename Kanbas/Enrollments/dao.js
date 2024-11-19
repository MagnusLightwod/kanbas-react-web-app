import Database from "../Databases/index.js";

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  // Create a new enrollment record
  const newEnrollment = {
    _id: Date.now(), // Unique identifier
    user: userId,
    course: courseId,
  };
  // Add the new enrollment to the database
  enrollments.push(newEnrollment);
  return newEnrollment;
}

// export function enrollUserInCourse(userId, courseId) {
//     const { enrollments } = Database;
//     enrollments.push({ _id: Date.now(), user: userId, course: courseId });
//   }
  

export function findEnrollmentsByUser(userId) {
  const { enrollments } = Database;
  // Filter enrollments by user ID
  return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function findEnrollmentsByCourse(courseId) {
  const { enrollments } = Database;
  // Filter enrollments by course ID
  return enrollments.filter((enrollment) => enrollment.course === courseId);
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  // Find all courses for which the user has an enrollment
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) => enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

export function deleteEnrollment(userId, courseId) {
  let { enrollments } = Database;
  // Remove enrollment matching the user and course IDs
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export function deleteEnrollmentsByCourse(courseId) {
  let { enrollments } = Database;
  // Remove all enrollments associated with a specific course
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
}

export function deleteEnrollmentsByUser(userId) {
  let { enrollments } = Database;
  // Remove all enrollments associated with a specific user
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.user !== userId
  );
}
