/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
describe('Testing the react app', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should have 3 todo list items', () => {
    cy.get('ul li').should('have.length', 3);
  });

  it('should have one todo item completed', () => {
    cy.get('ul li').children().should('have.class', 'complete');
  });

  it('should mark one of the items as completed', () => {
    cy.get('ul li').within((elementes) => {
      const liItem = elementes[1];
      const checkbox = liItem.querySelector('input[type=checkbox]');
      checkbox.click();

      const label = liItem.querySelector('label');
      return cy.get(label).should('have.class', 'complete');
    });
  });
});
