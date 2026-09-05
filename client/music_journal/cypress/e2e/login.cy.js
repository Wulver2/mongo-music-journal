/// <reference types="Cypress" />

describe("login tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/login")
    });
    // successful login goes to homepage/dashboard
    // unsuccessful login 
})