import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments/enroll/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];
    const status = await enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
    res.send(status);
  });
  app.delete("/api/enrollments/unenroll/:courseId", async (req, res) => {
    const { courseId } = req.params;
    const currentUser = req.session["currentUser"];
    const status = await enrollmentsDao.unenrollUserInCourse(currentUser._id, courseId);
   res.send(status);
});}