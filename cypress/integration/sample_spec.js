describe('My First Test', () => {
    it('Verify Home Page', () => {
      cy.visit(Cypress.env('HOST'));
      expect(true).to.equal(false);
    })
  })
