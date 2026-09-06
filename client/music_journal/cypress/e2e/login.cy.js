/// <reference types="Cypress" />

describe("login tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/login")
    });
    // successful login goes to homepage/dashboard
    // unsuccessful login 
    it("Wrong email", () => {
        cy.get("#email").type("wrongemail@example.com");
        cy.get("#password").type("password");
        cy.get("#error").should('contain', "email does not exist") 
    })
})