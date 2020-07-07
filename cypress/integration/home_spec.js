describe("Home Page Functionality", () => {
  it("Verify Home Page Contains Basic Content", () => {
    cy.visit(Cypress.env("HOST"));
    cy.contains("OPEN PRACTICE LIBRARY");

    // needs to align to test data in dev db
    // cy.get('[data-testid="practiceNum"]').contains("107");
    // cy.get('[data-testid="contributorNum"]').contains("67");

    // verify 8 eight curated practices available
    cy.get('[data-testid="practicecardgrid"]')
      .children()
      .should("have.length", 8);
  });

  it("Verify Login Button Shows Modal", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="loginForm"]').should("not.be.visible");
    cy.get('[data-testid="loginButton"]').click();
    cy.get('[data-testid="loginForm"]').should("be.visible");
  });

  it("Verify About Us Button Shows About Page", () => {
    cy.visit(Cypress.env("HOST"));
    // TO BE IMPLEMENTED
  });

  it("Verify See Everything Button Shows Practices Page", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.url().should("include", "/practice");
  });

  it("Verify Explore the Library Button Shows Practices Page", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="exploreLibraryButton"]').click();
    cy.url().should("include", "/practice");
  });

  it("Verify Click of Practice Card", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.url().should("include", "/practice/event-storming");
  });
});
