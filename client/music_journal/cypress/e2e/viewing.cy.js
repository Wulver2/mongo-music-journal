describe('viewing songs, albums, etc logged-in', () => {
    be
    before("log in", () => {
        //login
        cy.visit("/songs")
    })
    it("shows favorite button on each song", () => {
        
    })
})
describe('viewing songs, albums, etc as a guest', () => {

})
