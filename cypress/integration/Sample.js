const { after } = require("node:test")

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

      it('select pay electric bill item', () => {
        // select pay electric bill
        cy.get("li:nth-of-type(1) input").click();
        // verify it selected
        cy.get("footer > button").should('be.visible')
        cy.get("footer > button").should('have.text','Clear completed')

        // click on clear completed
        cy.get("footer > button").click();
        // verify it shows 1 item left & wont show clear completed button
        cy.get("footer > button").should('not.be.visible')

      })

      it('select walk the dog', () => {
        // select walk the dog
        cy.get("li:nth-of-type(2) input").click();
        // verify it selected
        cy.get("footer > button").should('be.visible')
        cy.get("footer > button").should('have.text','Clear completed')

        // click on clear completed
        cy.get("footer > button").click();
        // verify it shows 1 item left & wont show clear completed button
        cy.get("footer > button").should('not.be.visible')

        
      })
})