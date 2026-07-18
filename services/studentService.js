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

export function getStudentById(id) {
  const studentInfo = students.find((student) => student.id === id);
  return studentInfo;
}
