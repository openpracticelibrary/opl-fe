const { wait } = require("@testing-library/react");

describe('My allPractice page Tests', () => {
  it('Verify Home Page', () => {
    cy.visit(Cypress.env('HOST'));
  });

  it("Verify See Everything Button Shows Practices Page", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.url().should("include", "/practice");
  });
  //tests for Drawer here
  it("Verify lists in Drawer", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="drawerActions"]').click();
    cy.get('[data-testid="drawerPractices"]');
    cy.get('[data-testid="drawerCommunity"]');
    cy.get('[data-testid="drawerActions"]').click();
  });

  it("Verify OPL Logo action in Drawer", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="drawer"]');
    cy.get('[data-testid="oplLogo"]').should("not.be.visible");
    cy.get('[data-testid="drawerActions"]').click();
    cy.get('[data-testid="oplLogo"]').should("be.visible");
    cy.get('[data-testid="oplLogo"]').click();
    cy.url().should("include", "/");
  });
  //tests for allPractice page BODY here onwards
  it("Verify Login Button Shows Dialogue", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="loginForm"]').should("not.be.visible");
    cy.get('[data-testid="loginButton"]').click();
    cy.get('[data-testid="loginForm"]').should("be.visible");
  });

  it("Varify Popular filter on filterBar", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="popularFilterComponent"]').find('[data-testid="popularFilterButton"]').click();
    cy.get('[data-testid="popularFilterMenu"]').contains('Popular');
    const newestOption = cy.get('[data-testid="popularFilterMenu"]').contains('Newest');
    newestOption.click().wait(250);
    cy.get('[data-testid="popularFilterComponent"]').find('[data-testid="popularFilterButton"]').click();
    cy.get('[data-testid="popularFilterMenu"]').contains('Newest');
    const curatedOption = cy.get('[data-testid="popularFilterMenu"]').contains('Curated');
    curatedOption.click();
  });

  it("Varify Filter Tags on filter Bar", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    const tags = cy.get('[data-testid="filterTagComponent"]').find('[data-testid="filterTags"]');
    tags.contains('ALL').click();
    //question : how to check other tags for the test
  });

  it("Varify Filter Button filter Bar", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="extraFilter').should("not.be.visible");
    cy.get('[data-testid="filtersToggleButton"]').click();
    cy.get('[data-testid="extraFilter').should("be.visible");
  });

  it("Varify DropDown filter Bar", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="filtersToggleButton"]').click();
    const dropDown = cy.get('[data-testid="dropDownFilter').contains("Entire Process Model");
    dropDown.click();
    //cy.get('[data-testid="selectedDropDown').contains("DISCOVERY");  
    //Question : not getting tags because of #
  });

  it("Varify Keyword Search Field", () => {
    cy.visit(Cypress.env("HOST"));
    cy.get('[data-testid="seeEverythingButton"]').click();
    cy.get('[data-testid="filtersToggleButton"]').click();
    cy.get('[data-testid="keywordSearch');
  });
    //Question : how to write tests for search textbox and button?
  it("Verify Click of Practice Card", () => {
    cy.visit(Cypress.env("HOST"));
    const eventStorming = cy.get('[data-testid="practicecardgrid"]').contains("Event Storming");
    eventStorming.click();
    cy.url().should("include", "/practice/event-storming");
  });

})