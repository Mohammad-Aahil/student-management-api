export function validateStudent(req, res, next) {
  const { name, age, email, department } = req.body;

  //Name Validation
  console.log("Name validation middleware");
  if (!name?.trim()) {
    return res.status(400).json({
      message: " Validation failed",
      error: "Name is Required.",
    });
  }

  // Age Validation
  console.log("Age validation middleware");
  if (typeof age !== "number") {
    return res.status(400).json({
      message: " Validation failed",
      error: "Age must be number.",
    });
  }

  if (age < 18) {
    return res.status(400).json({
      message: " Validation failed",
      error: "Student must be older than 18.",
    });
  }

  //Email Validation
  console.log("Email validation middleware");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email?.trim()) {
    return res.status(400).json({
      message: "Validation failed",
      error: "Email is required.",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Validation failed",
      error: "Invalid email format.",
    });
  }

  // Department Validation
  console.log("Department validation middleware");
  if (!department?.trim()) {
    return res.status(400).json({
      message: " Validation failed",
      error: "Department is Required.",
    });
  }

  next();
}
