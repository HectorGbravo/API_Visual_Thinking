const StudentControllers = require("./controllers/StudentControllers");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Welcome to the Student Visual Thinking API"});
});


app.get("/v1/students", (request, response) => {
  
    const listAllStudents= StudentControllers.getStudents();
    response.json({students: listAllStudents});
});

app.get("/v1/mailCertificated", (request, response) => {
    const mailsHaveCertificated= StudentControllers.mailsHaveCertification();
    response.json({mailCertificated: mailsHaveCertificated});
});


app.get("/v1/studentsCredits", (request, response) => {
    const studentsByCredits= StudentControllers.filterStudentsByCredits(500);
    response.json({students: studentsByCredits});
});

app.listen(port, () => {
    console.log(`Student Visual Thinking  API in localhost:${port}`);
});