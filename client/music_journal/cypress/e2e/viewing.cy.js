describe('viewing songs, albums, etc logged-in', () => {
    be
    before("log in", () => {
        //login
        cy.visit("login")
        cy.visit("[data-cy='email']")
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
