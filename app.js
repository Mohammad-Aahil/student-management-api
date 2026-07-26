import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import "./database/init.js";
import db from "./database/connection.js";
// import Routers
import studentRoutes from "./routes/studentRoutes.js";
// import { logger } from "./middlewares/logger.js";

// configure .env variables
dotenv.config();

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
