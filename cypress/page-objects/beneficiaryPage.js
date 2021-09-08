/// <references types="cypress/">

export function validateadd(expectedText) {
    cy.get('.Typography__H2-qw5r90-1').should('have.text', expectedText)
}
export function acceptCookies() {
    cy.contains('Got it').click()
}
export function addBeneficiaries(message) {
    cy.get('#first_name').type("King")
    cy.get('#last_name').type("Man")
    cy.get('#second_last_name').type("Ledgend")
    cy.contains('Day').type("2{enter}")
    cy.contains('Month').type("March{enter}")
    cy.contains('Year').type("1982{enter}")
    cy.contains('Kinship').type("Relative{enter}")
    cy.get('#percentage').type(50)
    cy.get('[data-testid=add-beneficiary-button]').click()
    cy.contains('Transaction PIN').click({force:true})
    cy.contains('Transaction PIN').type("1234")
    cy.get('.eUzSKh').click();
    cy.get('.styles__Message-vmzast-2').should('have.text', message)
}