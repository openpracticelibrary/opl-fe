const { wait } = require("@testing-library/react");

describe('My Practice page Tests', () => {
  it('Verify Home Page', () => {
    cy.visit(Cypress.env('HOST'));
  });

  it("Verify Click of Practice Card", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.url().should("include", "/practice/event-storming");
  });

  it("Verify Login Button Shows Dialogue", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.get('[data-testid="loginForm"]').should("not.be.visible");
    cy.get('[data-testid="loginButton"]').click();
    cy.get('[data-testid="loginForm"]').should("be.visible");
  });

  it("Verify Like Button on Practice Page", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    //like button tests
    //using dummy values
  });

  it("Verify Page Menu on Practice Page", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.get('[data-testid="pageMenu"]').contains("What").click();
    cy.get('[data-testid="pageMenu"]').contains("Why").click();
    cy.get('[data-testid="pageMenu"]').contains("How").click();
    cy.get('[data-testid="pageMenu"]').contains("Look").click();
    cy.get('[data-testid="pageMenu"]').contains("Links").click();
    cy.get('[data-testid="pageMenu"]').contains("AMA").click();
  });

  it("Verify Add Resources Button on Practice Page", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.get('[data-testid="addResourceForm"]').should("not.be.visible");
    cy.get('[data-testid="addResourcesButton"]').click();
    cy.get('[data-testid="addResourceForm"]').should("be.visible");
  });

})