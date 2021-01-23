const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Engineer Name', '15', 'engineer@noemail.com', 'GitHubUsername')

    expect(engineer.employeeName).toEqual(expect.any(String));
    expect(engineer.employeeID).toEqual(expect.any(String));
    expect(engineer.employeeEmail).toEqual(expect.stringContaining('@'));
    expect(engineer.gitHubUsername).toEqual(expect.any(String));
});

test("Gets Engineer's GitHub username", () => {
    const engineer = new Engineer('Engineer Name', '15', 'engineer@noemail.com', 'GitHubUsername')

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

test("Gets Engineer's role", () => {
    const engineer = new Engineer('Engineer Name', '15', 'engineer@noemail.com', 'GitHubUsername')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));

    console.log(engineer);
});
