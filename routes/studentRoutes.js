import express from "express";
import { createStudent } from "../controllers/studentController.js";
// import { validateStudent } from "../middlewares/validateStudent.js";

const router = express.Router();
router.post("/students", createStudent);

// addStudent,
// deleteStudent,
// getStudent,
// getStudents,
// updateStudent,
// router.get("/students", getStudents);
// router.get("/students/:id", getStudent);
// router.put("/students/:id", updateStudent);
// router.delete("/students/:id", deleteStudent);

export default router;
