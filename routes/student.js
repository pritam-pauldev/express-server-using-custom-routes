const express = require("express");
const router = express.Router();

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

router.get("/", (req, res) => {
  const studentList = students.map((s) => s.name).join(",");
  res.send(`Students: ${studentList}`);
});

router.get("/:id", (req, res) => {
  const id = students.find((s) => s.id == req.params.id);
  if (!id) res.send("Student Not Found");
  res.send(`Student: ${id.name}`);
});

module.exports = router;
