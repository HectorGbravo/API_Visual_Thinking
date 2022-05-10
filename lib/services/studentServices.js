class StudentServices {
    static getStudents(students){
        return students;
    }
    static mailsHaveCertification(students){
        const studentsCertificated=   students.filter((student) => student.haveCertification === true);
        return  studentsCertificated.map((student) => student.email);
    }
    static filterStudentsByCredits(students,credits){
        return  students.filter((student) => student.credits>credits);
    }
}
  
module.exports = StudentServices;