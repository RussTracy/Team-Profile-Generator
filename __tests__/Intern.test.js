const Intern = require('../lib/Intern');

test('Creates an Intern object', () => {
    const intern = new Intern('Intern Name', '20', 'intern@noemail.com', 'internSchool')

    expect(intern.employeeName).toEqual(expect.any(String));
    expect(intern.employeeID).toEqual(expect.any(String));
    expect(intern.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(intern.internSchool).toEqual(expect.any(String));
});

test("Gets Intern's school", () => {
    const intern = new Intern('Intern Name', '20', 'intern@noemail.com', 'internSchool')

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Gets Intern's role", () => {
    const intern = new Intern('Intern Name', '20', 'intern@noemail.com', 'internSchool')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));

    console.log(intern);
});
