import { reloadIfSelectorNotExist } from "../support/utils"

describe("Sign in", () => {
	it("Allows sign in with correct credentials", () => {
		cy.enterEmail(Cypress.env("user"));
		cy.contains("Password");
		cy.enterPassword(Cypress.env("password"));
		cy.clickSubmit();

		cy.url().should("include", "/servicehub");
		cy.getDataTestId("title-service-hub").should("contain", "Service Hub");		
	});
  
	it("Does not allow sign in with incorrect credentials", () => {
		cy.enterEmail("not+a+user@gmail.com");
		cy.contains("Password");
		cy.enterPassword("A password");
		cy.clickSubmit();

		cy.getDataTestId("kong-auth-error-message").should(
			"contain",
			"Incorrect username or password. Please try again.",
		);
	});

});