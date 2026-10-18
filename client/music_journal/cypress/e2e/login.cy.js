
describe("login tests", () => {
    beforeEach(() => {
        cy.visit("/login")
    });
    // successful login goes to homepage/dashboard
    // unsuccessful login 
    it("Wrong email", () => {
        cy.get("[data-cy='email']").type("wrongemail@example.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='submit']").click();
        cy.get("[data-cy='error']").should('contain', "email does not exist")
    })

    it("Wrong password", () => {
        cy.get("[data-cy='email']").type("test@example.com");
        cy.get("[data-cy='password']").type("wrongPassword");
        cy.get("[data-cy='submit']").click();
        cy.get("[data-cy='error']").should("contain", "Incorrect password. Please try again.");
    })

    it("Successful login", () => {
        cy.get("[data-cy='email']").type("test@example.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='submit']").click();
        cy.url().should('eq', "http://localhost:5173/");
        // should say welcome back, username
        //cy.get("h1").should('contain', "welcome back, ");
    })
})