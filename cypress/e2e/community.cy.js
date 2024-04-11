
import {Community} from "../page-objects/Community.js"


describe('Automating Phasecurve', () => {
const community = new Community()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open Community Us Page', () => {
        community.ourCommunity()
        cy.get('.css-13yas5h').should('have.text', 'COMMUNITY').and('be.visible')

    })

})