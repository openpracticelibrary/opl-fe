describe('My First Test', () => {
    it('Verify Home Page', () => {
      cy.visit(Cypress.env('HOST'));
    })
  })
