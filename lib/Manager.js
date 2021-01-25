const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeName, employeeID, employeeEmail, officeNumber) {
        super(employeeName, employeeID, employeeEmail);

        this.officeNumber = officeNumber;
        this.employeeRole = 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Manager;