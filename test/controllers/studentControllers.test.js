const StudentControllers = require("./../../lib/controllers/studentControllers");

describe("Pruebas de la clase StudentControllers", () => {
    test("1. Probando el método StudentControllers.getStudents para consultar a todos los estudiantes", () => {
        const students =StudentControllers.getStudents();
        expect(students.length).toBe(51);
    });
    test("2. Probando el método StudentControllers.mailsHaveCertification para consulta de los correos de los estudiantes con certificación", () => {
        const students =StudentControllers.mailsHaveCertification();
        expect(students[0]).toBe("Todd@visualpartnership.xyz");
        expect(students.length).toBe(29);
    });
    test("3. Probando el método StudentControllers.filterStudentsByCredits para consulta de estudiantes que tengan creditos mayor a 500.", () => {
        const students =StudentControllers.filterStudentsByCredits(500);
        expect(students.length).toBe(27);
    });
});