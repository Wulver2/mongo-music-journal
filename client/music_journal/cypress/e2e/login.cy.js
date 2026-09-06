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
        cy.get("form button").click();
        cy.get("#error").should('contain', "email does not exist")
    })

    it("Wrong password", () => {
        cy.get("#email").type("test@example.com");
        cy.get("#password").type("wrongPassword");
        cy.get("form button").click();
        cy.get("#error").should("contain", "Incorrect password. Please try again.");
    })

    it("Successful login", () => {
        cy.get("#email").type("test@example.com");
        cy.get("#password").type("password");
        cy.get("form button").click();
        cy.url().should('eq', "http://localhost:5173/");
        // should say welcome back, username
        //cy.get("h1").should('contain', "welcome back, ");
    })
})