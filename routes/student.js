const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("List all students");
})

module.exports = router;