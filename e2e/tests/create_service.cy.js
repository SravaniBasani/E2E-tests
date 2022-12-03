import { v4 as uuidv4 } from 'uuid';

describe("Create Service", function () {
    beforeEach(function () {
        cy.login();
        cy.getDataTestId("new-service").click();
        cy.url().should("include", "/servicehub/create");
        cy.getDataTestId("save-service-button").should("be.disabled");
    });

    it("should show error message when display name is not provided at the time of creation", function () {
        const DESCRIPTION = "test description";
        const ERROR_ALERT_MESSAGE = "name should not be empty";
        cy.getDataTestId("service-description").type(DESCRIPTION);
        cy.getDataTestId("save-service-button").should("be.enabled");
        cy.getDataTestId("save-service-button").click();
        cy.get("[role='alert']")
        .contains(ERROR_ALERT_MESSAGE)
        .should("be.visible");
    });

    it("should show error message when display name is invalid", function () {
        const INVALID_DISPLAY_NAME = "test*service"
        let INVALID_NAME_ALERT_MESSAGE = 'name must match /^[0-9a-z.\\-_~:]*$/i regular expression';
        cy.getDataTestId("service-display-name").type(INVALID_DISPLAY_NAME);
        cy.getDataTestId("save-service-button").click();
        cy.get("[role='alert']")
        .contains(INVALID_NAME_ALERT_MESSAGE)
        .should("be.visible");
    })

    it("should create a new service with a valid display name", function () {
        const VALID_DISPLAY_NAME = `service ${uuidv4()}`;
        console.log(VALID_DISPLAY_NAME);
        cy.getDataTestId("service-display-name").type(VALID_DISPLAY_NAME);
        cy.getDataTestId("save-service-button").should("be.enabled");
        cy.getDataTestId("save-service-button").click();
        cy.url().should("include", "/overview");
        cy.getDataTestId("title-service").should("have.text",VALID_DISPLAY_NAME);
    });
});