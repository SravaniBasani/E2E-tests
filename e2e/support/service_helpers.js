export function createService(serviceName) {
    cy.getDataTestId("new-service").click();
    cy.url().should("include", "/servicehub/create");
    cy.getDataTestId("service-display-name").type(serviceName);
    cy.getDataTestId("save-service-button").click();
    cy.url().should("include", "/overview");
    cy.getDataTestId("title-service").should("have.text",serviceName);
}

export function createServiceVersion(versionName) {
    cy.getDataTestId("new-service-version").click();
    cy.url().should("include", "/versions/create");
    cy.get("[name='version']").type(versionName);
    cy.getDataTestId("create-service-version-button").click();
    cy.getDataTestId("cancel-create-service-version-button").click();
    cy.getDataTestId("title-versions").should("have.text", "Versions")
    cy.getDataTestId(versionName).should("exist");
}