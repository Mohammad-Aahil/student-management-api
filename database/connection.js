import sqlite3 from "sqlite3";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.DATABASE_PATH);

const db = new sqlite3.Database(process.env.DATABASE_PATH, (error) => {
  if (error) {
    console.error("Database connection failed:", error.message);
    return;
  }

  console.log("✅ Connected to SQLite database.");
});

export default db;
