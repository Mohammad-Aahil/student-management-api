import express from "express";
// import Routers
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

const PORT = 3000;

app.use("/", studentRoutes);
app.get("/", (request, response) => {
  response.send("Student Management API is running..🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
