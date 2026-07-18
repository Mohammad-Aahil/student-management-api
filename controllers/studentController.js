import { getAllStudents } from "../services/studentService.js";

export function getStudents(req, res) {
  const students = getAllStudents();
  console.log(students);

  res.status(200).json(students);
}
