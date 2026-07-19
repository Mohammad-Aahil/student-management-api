import express from "express";
import {
  addStudent,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();
router.get("/students", getStudents);
router.get("/students/:id", getStudent);
router.post("/students", addStudent);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;
