const StudentServices = require("./../../lib/services/studentServices");
const Reader = require("./../../lib/utils/Reader");

const studentsData = Reader.readJsonFile("./test/data/visualpartnersExtract.json"); 

describe("Pruebas a la clase StudentServices", () => {
    test("1. Probando el método getStudents para consultar todos los estudiantes", () => {
        const students =StudentServices.getStudents(studentsData);
        expect(students.length).toBe(7);
    });
    test("2. Probando el método mailsHaveCertification para consultar los correos de los estudiantes que tienen certificación", () => {
        const students =StudentServices.mailsHaveCertification(studentsData);
        expect(students[0]).toBe("Todd@visualpartnership.xyz");
        expect(students.length).toBe(5);
    });
    test("3. Probando el método filterStudentsByCredits que Consulta los estudiantes que tengan creditos mayor a 500.", () => {
        const students =StudentServices.filterStudentsByCredits(studentsData,500);
        expect(students.length).toBe(5);
    });
});