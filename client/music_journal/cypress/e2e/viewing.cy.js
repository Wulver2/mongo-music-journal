// TODO: once more artists and albums are added to testing seed update looping methods
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
        // only have 7 songs for testing environment
        for (var i = 0; i < 7; i++) {
            cy.get(`[data-cy="star${i}"]`).should('contain', "★")
        }
    })

    it("shows favorite button for each artists", () => {
        cy.visit("/artists")
        //get header artists add test attribure later
        //cy.get()
        cy.get(`[data-cy="star${0}"]`).should('contain', "★");
    })
    it("shows favorite button for each album", () => {
        cy.visit("/albums")
        //get header artists add test attribure later
        //cy.get()
        cy.get(`[data-cy="star${0}"]`).should('contain', "★");
    })
})
describe('viewing songs, albums, etc as a guest', () => {

})
