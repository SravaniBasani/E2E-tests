describe("Sign in normal", function () {
    it("Allows sign in with correct credentials", function () {
      cy.enterEmail(Cypress.env("user"));
      cy.contains("Password");
      cy.enterPassword(Cypress.env("password"));
      cy.clickSubmit();
      cy.getDataTestId("title-service-hub").should("contain","Service Hub");
    });
  
    it("Does not allow sign in with incorrect credentials", function () {
      cy.enterEmail("not+a+user@gmail.com");
      cy.contains("Password");
      cy.enterPassword("A password");
      cy.clickSubmit();
      cy.get("[data-testid='kong-auth-error-message']").should(
        "contain",
        "Incorrect username or password. Please try again.",
      );
    });
});