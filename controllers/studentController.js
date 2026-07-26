import { createStudentService } from "../services/studentService.js";

export async function createStudent(req, res) {
  try {
    const student = await createStudentService(req.body);

    return res.status(201).json({
      success: true,
      data: student,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

// import {
//   createStudentService,

// } from "../services/studentService.js";

// // OLD Services
// // deleteStudentByID,
// // getAllStudents,
// // getStudentByID,
// // updateStudentByID,
// export function getStudents(req, res) {
//   const students = getAllStudents();
//   // console.log(students);

//   res.status(200).json(students);
// }

// // its, Done Bro
// // export function addStudent(request, response) {
// //   const studentData = request.body;
// //   console.log(request.body);

// //   const newStudent = createStudent(studentData);

// //   response.status(201).json({
// //     message: "Student created successfully",
// //     student: newStudent,
// //   });
// // }

// export function getStudent(request, response) {
//   // fetch request ID from URL
//   const studentId = Number(request.params.id);
//   const studentInfo = getStudentByID(Number(studentId));

//   if (!studentInfo) {
//     return response.status(404).json({
//       message: "Student not found",
//     });
//   }

//   response.status(200).json(studentInfo);
// }

// export function updateStudent(request, response) {
//   const studentId = Number(request.params.id);
//   const updatedStudent = updateStudentByID(studentId, request.body);

//   if (!updatedStudent) {
//     return response.status(404).json({
//       message: "Student not found",
//     });
//   }

//   return response.status(200).json({
//     message: "Student Updated Successfully",
//     student: updatedStudent,
//   });
// }

// export function deleteStudent(request, response) {
//   const studentId = Number(request.params.id);
//   const studentToDelete = deleteStudentByID(studentId);

//   if (!studentToDelete) {
//     return response.status(404).json({
//       message: "Student not found",
//     });
//   }

//   return response.status(200).json({
//     message: "Student Deleted Successfully",
//     student: studentToDelete,
//   });
// }
