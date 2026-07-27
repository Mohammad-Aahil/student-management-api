import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import studentRoutes from "./routes/studentRoutes.js";

// configure .env variables
dotenv.config();
// console.log("PORT:", process.env.PORT);
// console.log("URI:", process.env.MONGODB_URI);
await connectDB();

const app = express();
const PORT = process.env.PORT;
// console.log(PORT);

// Global Middleware
app.use(express.json());

// Routes
app.use(morgan("dev"));

// app.use(logger);
app.use("/", studentRoutes);
app.get("/", (request, response) => {
  response.send("Student Management API is running..🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
