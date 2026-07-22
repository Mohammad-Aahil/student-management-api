import express from "express";
import morgan from "morgan";
// import Routers
import studentRoutes from "./routes/studentRoutes.js";
// import { logger } from "./middlewares/logger.js";

const app = express();

const PORT = 3000;

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
