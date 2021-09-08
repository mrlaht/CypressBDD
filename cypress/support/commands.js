
 Cypress.Commands.add('navigate', (selector)=> {
    cy.visit(`${selector}`)
  })