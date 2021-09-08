/// <reference types="cypress"/>
import {
    validate,acceptCookies,login
    } from '../page-objects/loginPage'
import {warningMessage} from '../page-objects/walletPage'
    
    describe('Login and Verify Warning Message', () => {
        const loginPath = Cypress.config().loginPath
        const walletPath = Cypress.config().walletPath
    
        beforeEach(() => {
            cy.navigate(loginPath);
            cy.url().should('include', loginPath)
            validate('Log in')
            acceptCookies()
            login()
        })
        it('Verify warning message', () => {
            cy.url().should('include', walletPath)
            validate('Wallet')
            warningMessage('Oops! Something went wrongThis transaction exceeds your limit. Increase your account limit to continue. Increase my limit')
       })
    })
    