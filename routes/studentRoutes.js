import express from "express";
import {
  addStudent,
  getStudent,
  getStudents,
} from "../controllers/studentController.js";

const router = express.Router();
router.get("/students", getStudents);
router.get("/students/:id", getStudent);
router.post("/students", addStudent);

export default router;
