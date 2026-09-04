/// <reference types="Cypress" />

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/register');
    });
    // one test for sucessful login (goes to dash board)
    // one for incorrect confirm password
    it("user enters incorrect confirm password", () => {
        //email
        cy.get("#email").type("test@example.com");
        cy.get("#username").type("test@example.com");
        cy.get("#password").type("password123");
        cy.get("#confirmPassword").type("123password");
        cy.get('#regiButton').click()
        cy.url().should('eq', 'http://localhost:5173/register')
        cy.get("#matchError").should('contain', "Passwords do not match");
    })
    it("user successfully registers", () => {
        cy.get("#email").type("test@example.com");
        cy.get("#username").type("test@example.com");
        cy.get("#password").type("password123");
        cy.get("#confirmPassword").type("password123");
        //cy.get('#regiButton').click()
        //cy.url().should('eq', 'http://localhost:5173/')
    })
    // delete user so that test can be used again -> have to add delete user route
})