import db from "./connection.js";

const createStudentsTable = `
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    department TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
);
`;

db.run(createStudentsTable, (error) => {
  if (error) {
    console.error("Failed to create students table:", error.message);
    return;
  }

  console.log("✅ Students table is ready.");
});
