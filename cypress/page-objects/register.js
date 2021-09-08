/// <references types="cypress/">

export function validate(expectedText) {
    cy.get('.Typography__H1-qw5r90-0 > span').should('have.text', expectedText)
}
export function acceptCookies() {
    cy.contains('Got it').click()
}
export function registerUser(country, email) {
     cy.get('.styles__Form-sc-1cll17m-4 > .styles__Wrapper-sc-6qm6qf-6 > .css-m0do4z > .css-16ljna5 > .css-tdzd0p').type(country+"{enter}")
     cy.get('#email').type(email)
     cy.get('#password').type("Hello@12{enter}")
     cy.get('#password_confirmation').type("Hello@12{enter}")
     cy.get('#accept_terms').check({ force: true })
     cy.get('#accept_nvio_terms').check({ force: true })
     cy.get('#accept_mail').check({ force: true })
     cy.get('.styles__StyledButton-sc-1mfj3x4-0').click()
}