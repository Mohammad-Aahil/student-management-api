import express from "express";
import { addStudent, getStudents } from "../controllers/studentController.js";

const router = express.Router();
router.get("/students", getStudents);
router.post("/students", addStudent);

export default router;
