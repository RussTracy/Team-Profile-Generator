
const generateManager = managerArr => {
    return `
    <section class="my-3" id="manager">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Manager</h2>
      <div class="flex-row justify-space-between">
      ${managerArr
            .map(({ employeeName, employeeId, employeeEmail, employeeRole, officeNumber }) => {
                return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employeeName}</h3>
            <h5 class="portfolio-languages">
              ID:
              ${employeeId}
            </h5>
            <p>${employeeEmail}</p>
            <p>${employeeRole}</p>
            <p>${officeNumber}</p>
          </div>
        `;
            })
        }
      </div>
    </section>
  `;
};

const generateEngineers = engineerArr => {
    return `
    <section class="my-3" id="engineer">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers</h2>
      <div class="flex-row justify-space-between">
      ${engineerArr
            .map(({ employeeName, employeeId, employeeEmail, employeeRole, gitHubUsername }) => {
                return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employeeName}</h3>
            <h5 class="portfolio-languages">
              ID:
              ${employeeId}
            </h5>
            <p>${employeeEmail}</p>
            <p>${employeeRole}</p>
            <p>${gitHubUsername}</p>
          </div>
        `;
            })
        }
      </div>
    </section>
  `;
};

const generateInterns = internsArr => {
    return `
    <section class="my-3" id="intern">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Interns</h2>
      <div class="flex-row justify-space-between">
      ${internsArr
            .map(({ employeeName, employeeId, employeeEmail, employeeRole, internSchool }) => {
                return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${employeeName}</h3>
            <h5 class="portfolio-languages">
              ID:
              ${employeeId}
            </h5>
            <p>${employeeEmail}</p>
            <p>${employeeRole}</p>
            <p>${internSchool}</p>
          </div>
        `;
            })
        }
      </div>
    </section>
  `;
};

module.exports = teamMembers => {

    const { Manager, Engineer, Intern } = teamMembers;

    return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
    ${generateManager(Manager)}<br />
    
    ${generateEngineers(Engineer)}<br />
    
    ${generateInterns(Intern)}<br />
    
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by </h3>
    </footer>
  </body>
  </html>
  `;
}