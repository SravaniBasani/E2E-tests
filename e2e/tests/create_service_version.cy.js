import { createService } from "../support/service_helpers";
import { v4 as uuidv4 } from 'uuid';

describe("Create Service", function () {
    const SERVICE_NAME = `service ${uuidv4()}`;
    beforeEach(function () {
        cy.login();
        //TODO: Make an API call to create service instead of using UI 
        //as this is a pre-requisite for this test
        createService(SERVICE_NAME);
    });

    it("should create new version", function () {
        const VERSION_NAME = `v${uuidv4()}`
        console.log(VERSION_NAME);
        cy.getDataTestId("new-service-version").click();
        cy.url().should("include", "/versions/create");
        cy.get("[name='version']").type(VERSION_NAME);
        cy.getDataTestId("create-service-version-button").click();
        cy.get(`[data-testid=title-${VERSION_NAME}]`).should("exist");
        cy.getDataTestId("service-display-name").should("have.text",SERVICE_NAME)
    });
});