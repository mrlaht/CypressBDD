/// <reference types="cypress"/>
import { getEmail } from '../fixtures/ramdomemail'
import {
validate,acceptCookies,registerUser
} from '../page-objects/register'

describe('Register a new user', () => {
    const registerPath = Cypress.config().registerPath

    beforeEach(() => {
        cy.navigate(registerPath)
        cy.url().should('include', registerPath)
        validate('Create an account')
        acceptCookies()
    })

    it('Register User 1', () => {
      registerUser('Mexico', getEmail())
    })

    it('Register User 2', () => {
      registerUser('Argentina', getEmail())
    })
})
