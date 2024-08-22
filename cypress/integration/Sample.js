// Sample.js created with Cypress

describe('example to-do app', () => {
    beforeEach(() => {
    // visit the cypress.io website
      cy.visit('https://example.cypress.io/todo')
    })

    it('displays two todo items by default', () => {
        // verify it shows 2 element
        cy.get('.todo-list li').should('have.length', 2)
    
        // verify text on that 2 elemnts
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
      })
})