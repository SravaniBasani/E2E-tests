import { login, createService } from "../support/utils";
import { v4 as uuidv4 } from 'uuid';

describe("Create Service Version", () => {

	it("should create new version for a service", () => {
		const VERSION_NAME = `v${uuidv4()}`;
		const SERVICE_NAME = `service ${uuidv4()}`;

		login();
		createService(SERVICE_NAME);

		cy.getDataTestId("new-service-version").click();

		cy.url().should("include", "/versions/create");

		cy.get("[name='version']").type(VERSION_NAME);
		cy.getDataTestId("create-service-version-button").click();
		
		//verifying if the version name and service name are correct on the newly created version page
		cy.get(`[data-testid=title-${VERSION_NAME}]`).should("exist");
		cy.getDataTestId("service-display-name").should("have.text", SERVICE_NAME);
	});

});