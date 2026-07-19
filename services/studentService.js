import students from "../data/students.js";

export function getAllStudents() {
  return students;
}
// console.log(getAllStudents());

export function createStudent(studentData) {
  // creating new ID for every creation
  let highestId = 0;

  for (const student of students) {
    if (student.id > highestId) {
      highestId = student.id;
    }
  }

  //Implementatiom
  const newStudent = {
    id: highestId + 1,
    ...studentData,
  };
  students.push(newStudent);

  return newStudent;
}

export function getStudentByID(id) {
  const studentInfo = students.find((student) => student.id === id);
  return studentInfo;
}

export function updateStudentByID(id, studentData) {
  const studentToUpdate = students.find((student) => student.id === id);

  if (!studentToUpdate) undefined;
  Object.assign(studentToUpdate, studentData);
  return studentToUpdate;
}

export function deleteStudentByID(id) {
  const studentToDelete = students.find((student) => student.id === id);
  if (!studentToDelete) return;
  const findStudentIndex = students.findIndex(
    (student) => student.id === studentToDelete.id,
  );
  // remove student
  students.splice(findStudentIndex, 1);
  return studentToDelete;
}
