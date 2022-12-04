//TODO: Make an API call to create service instead of using UI 
//as this is pre-requisite
export function createService(serviceName) {
  cy.getDataTestId("new-service").click();
  cy.url().should("include", "/servicehub/create");

  cy.getDataTestId("service-display-name").type(serviceName);
  cy.getDataTestId("save-service-button").click();
    
  cy.url().should("include", "/overview");
  cy.getDataTestId("title-service").should("have.text",serviceName);
}

//TODO: Make an API call to create service version instead of using UI 
//as this is a pre-requisite
export function createServiceVersion(versionName) {
	cy.getDataTestId("new-service-version").click();
	cy.url().should("include", "/versions/create");

  cy.get("[name='version']").type(versionName);
  cy.getDataTestId("create-service-version-button").click();
}

export function login() {
	const USER = Cypress.env("user");
  const PASSWORD = Cypress.env("password");

  cy.url().should("include", "/login");
	cy.enterEmail(USER);
  cy.enterPassword(PASSWORD);
  cy.clickSubmit();

  cy.url().should("not.include", "sign_in");
	cy.url().should("include", "/servicehub");
}