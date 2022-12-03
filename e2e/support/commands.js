Cypress.Commands.add(
  "enterEmail", 
  (email = Cypress.env("user")) => {
  cy.get("[id='email']").clear().type(email);
});

Cypress.Commands.add(
  "enterPassword",
  (password = Cypress.env("password")) => {
    cy.contains("Password");
    cy.get("[id='password']").clear().type(password);
  },
);

Cypress.Commands.add("clickSubmit", () => {
    cy.get("[type='submit']").click();
});

Cypress.Commands.add(
  "login",
  (email = Cypress.env("user"), password = Cypress.env("password")) => {
    cy.enterEmail(email);
    cy.enterPassword(password);
    cy.clickSubmit();
    cy.url().should("not.include", "sign_in");
    cy.get("[data-testid='title-service-hub']").should("contain","Service Hub");
  },
);

Cypress.Commands.add("getDataTestId", (dataTestId) => {
  cy.get(`[data-testid="${dataTestId}"]`);
});