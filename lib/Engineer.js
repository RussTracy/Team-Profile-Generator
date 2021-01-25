const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employeeName, employeeID, employeeEmail, gitHubUsername) {
        super(employeeName, employeeID, employeeEmail);

        this.gitHubUsername = gitHubUsername;
        this.employeeRole = 'Engineer';
    }
    getGitHub() {
        return this.gitHubUsername;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Engineer;