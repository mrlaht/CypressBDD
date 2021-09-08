/// <references types="cypress/">

export function validate(expectedText) {
    cy.get('.Typography__H1-qw5r90-0').should('have.text', expectedText)
}
export function acceptCookies() {
    cy.contains('Got it').click()
}
export function login() {
    cy.get('#client_id').type("femtob+1@gmail.com{enter}")
    cy.get('#password').type("Hello@12{enter}")
    cy.contains('Log in').click()
}