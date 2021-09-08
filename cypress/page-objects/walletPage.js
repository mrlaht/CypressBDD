/// <references types="cypress/">

export function warningMessage(message) {
    cy.get('[for="btc"]').click()
    cy.contains('Deposit').click()
    cy.get('.ebqPit').should('have.text', message)
    cy.get('.ebqPit').type("{esc}")
}