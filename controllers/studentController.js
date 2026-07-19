import {
  createStudent,
  deleteStudentByID,
  getAllStudents,
  getStudentByID,
  updateStudentByID,
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
  const studentInfo = getStudentByID(Number(studentId));

  if (!studentInfo) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  response.status(200).json(studentInfo);
}

export function updateStudent(request, response) {
  const studentId = Number(request.params.id);
  const updatedStudent = updateStudentByID(studentId, request.body);

  if (!updatedStudent) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  return response.status(200).json({
    message: "Student Updated Successfully",
    student: updatedStudent,
  });
}

export function deleteStudent(request, response) {
  const studentId = Number(request.params.id);
  const studentToDelete = deleteStudentByID(studentId);

  if (!studentToDelete) {
    return response.status(404).json({
      message: "Student not found",
    });
  }

  return response.status(200).json({
    message: "Student Deleted Successfully",
    student: studentToDelete,
  });
}
