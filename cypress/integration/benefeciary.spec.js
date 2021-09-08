/// <reference types="cypress"/>
import {
    validate,acceptCookies,login
    } from '../page-objects/loginPage'
import {
        validateadd,addBeneficiaries
        } from '../page-objects/beneficiaryPage'
    
    describe('Add a new Beneficiary', () => {
        const addBeneficiaryPath = Cypress.config().addBeneficiaryPath
    
        beforeEach(() => {
            cy.navigate(addBeneficiaryPath);
            cy.url().should('include', addBeneficiaryPath)
            validate('Log in')
            acceptCookies()
            login()
        })
        it('Add Beneficiary Successfully', () => {
            validateadd('Add beneficiary')
            addBeneficiaries('Incorrect PIN')
            
       })
    })