describe('viewing songs, albums, etc logged-in', () => {
    before("log in", () => {
        //login
        cy.visit("login")
        cy.get("[data-cy='email']").type("test@example.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='submit']").click();
        cy.visit("/songs")
    })
    it("shows favorite button on each song", () => {
        for (var i = 0; i < 7; i++) {
            cy.get(`[data-cy="star${i}"]`).should('eq', "★")
        }
    })
})
describe('viewing songs, albums, etc as a guest', () => {

})
