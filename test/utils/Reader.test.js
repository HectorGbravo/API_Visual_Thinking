const Reader = require("./../../lib/utils/Reader");

describe("Test a la clase Reader", () => {
    test("1) Leer lista de estudiantes", () => {
        const students =Reader.readJsonFile("./test/data/visualpartnersDummy.json");
        expect(students.length).toBe(51);
    });
});