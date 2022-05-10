const StudentServices= require("../services/studentServices");
const Reader = require("../utils/Reader");
const file = "./../../lib/data/visualpartners.json";

class StudentControllers {
    static getStudents(){
        const students = Reader.readJsonFile(file);
        return StudentServices.getStudents(students);
    }
    static mailsHaveCertification(){
        const students = Reader.readJsonFile(file);
        return StudentServices.mailsHaveCertification(students);
    }

    static filterStudentsByCredits(credits){
        const students = Reader.readJsonFile(file);
        return StudentServices.filterStudentsByCredits(students,credits);
    }
}
  
module.exports = StudentControllers;