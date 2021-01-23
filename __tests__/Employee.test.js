const Employee = require('../lib/Employee');

test("Creates an Employee object", () => {
    const employee = new Employee('Dave', '234', 'noemail@noneatall.com');

    expect(employee.employeeName).toEqual(expect.any(String));
    expect(employee.employeeID).toEqual(expect.any(String));
    expect(employee.employeeEmail).toEqual(expect.any(String));
});

test("Gets employee's name", () => {
    const employee = new Employee('Dave', '234', 'noemail@noneatall.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test("Gets employee's id", () => {
    const employee = new Employee('Dave', '234', 'noemail@noneatall.com');

    expect(employee.getID()).toEqual(expect.any(String));
});

test("Gets employee's email", () => {
    const employee = new Employee('Dave', '234', 'noemail@noneatall.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("Gets employee's role", () => {
    const employee = new Employee('Dave', '234', 'noemail@noneatall.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});