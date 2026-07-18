import {
  createStudent,
  getAllStudents,
  getStudentById,
} from "../services/studentService.js";

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

export function getStudent(request, response) {
  // fetch request ID from URL
  const studentId = Number(request.params.id);
  const studentInfo = getStudentById(Number(studentId));

  if (!studentInfo) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  response.status(200).json(studentInfo);
}
