const express = require("express");
const app = express();
const routerCourse = require("./routes/course");
const routerHome = require("./routes/home");
const routerStudent = require("./routes/student");

app.use("/home", routerHome);
app.use("/student", routerStudent);
app.use("/course", routerCourse);
app.use("/*splat", (req, res, next) => {
    res.send("<h1>Page Not Found</h1>");
})
app.listen(3000, () => {
    console.log("Server is running in 3000 port");
})