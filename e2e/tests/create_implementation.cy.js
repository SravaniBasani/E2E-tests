import { createService, createServiceVersion } from "../support/service_helpers";
import { v4 as uuidv4 } from 'uuid';

describe("Create Service", function () {
    const SERVICE_NAME = `service-${uuidv4()}`;
    const VERSION_NAME = `v${uuidv4()}`;
    beforeEach(function () {
        cy.login();
        //TODO: Make an API call to create service and service version instead of using UI 
        //as these are pre-requisites for this test
        createService(SERVICE_NAME);
        createServiceVersion(VERSION_NAME);
    });

    it("should create new implementation", function () {
        const GATEWAY_SERVICE_NAME = `test_${uuidv4()}`;
        const GATEWAY_URL = "http://test.com";
        const ROUTE_NAME = `route_${uuidv4()}`;
        const PATH_NAME = `/path_${uuidv4()}`;

        cy.contains(VERSION_NAME).click();
        cy.contains("New implementation").click();
        cy.getDataTestId("title-create-a-new-implementation")
        .contains("Create a new implementation")
        .should("be.visible");
        cy.getDataTestId("gateway-service-name-input").type(GATEWAY_SERVICE_NAME);
        cy.get("[placeholder='Enter a URL']").type(GATEWAY_URL);
        cy.contains("Next").click();
        cy.getDataTestId("route-name-input").type(ROUTE_NAME);
        cy.getDataTestId("route-paths-input").type(PATH_NAME);
        cy.getDataTestId("complete-stepper").click();
        cy.getDataTestId("serviceVersionName").should("be.visible");
        cy.contains(ROUTE_NAME);
        cy.contains(PATH_NAME);
    });
});