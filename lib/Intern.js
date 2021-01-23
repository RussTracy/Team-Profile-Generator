const Employee = require('./Employee');

class Intern extends Employee {
    constructor(employeeName, employeeID, employeeEmail, internSchool) {
        super(employeeName, employeeID, employeeEmail);

        this.internSchool = internSchool;
        this.employeeRole = 'Intern';
    }
    getSchool() {
        return this.internSchool;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Intern;