import { createStudent, getAllStudents } from "../services/studentService.js";

export function getStudents(req, res) {
  const students = getAllStudents();
  console.log(students);

  res.status(200).json(students);
}

export function addStudent(request, response) {
  const studentData = request.body;
  console.log(request.body);

  const newStudent = createStudent(studentData);

  response.status(201).json({
    message: "Student created successfully",
    student: newStudent,
  });
}
