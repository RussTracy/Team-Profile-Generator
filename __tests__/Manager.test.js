const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
    const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

    expect(manager.employeeName).toEqual(expect.any(String));
    expect(manager.employeeID).toEqual(expect.any(String));
    expect(manager.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("Gets Manager's office number", () => {
    const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("Gets Manager's role", () => {
    const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

    console.log(manager);
});


// test("Gets Manager's name", () => {
//     const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

//     expect(manager.getName()).toEqual(expect.any(String));
// });

// test("Gets Manager's id", () => {
//     const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

//     expect(manager.getID()).toEqual(expect.any(String));
// });

// test("Gets Manager's email", () => {
//     const manager = new Manager('Russ', '222', 'email@noemail.com', '234')

//     expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
// });