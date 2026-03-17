const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("List all courses");
});

router.get("/:id", (req, res) => {
  res.send(`Fetch a course by ${req.params.id}`);
});

module.exports = router;
