describe('Testing the react app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('should have 3 todo list items', () => {
      cy.get('ul li').should('have.length', 3)
    })

    it('should have one todo item completed', () => {
        cy.get('ul li').children().should('have.class', 'complete');
    })

    it.only('should mark one of the items as completed', () => {
      cy.get('ul li')
        .children()
        .get('li:nth-child(2)')
        .click()
        .get('span')
        .should('have.class', 'complete');
    })
  })
  