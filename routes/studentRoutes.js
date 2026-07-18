import express from "express";
import { getStudents } from "../controllers/studentController.js";

const router = express.Router();
router.get("/students", getStudents);

// router.get("/", (request, response) => {
//   response.send("Student Management API is running..🚀");
// });

export default router;
