import {About} from "../page-objects/About.js"


describe('Automating Phasecurve', () => {
const about = new About()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open on About Us Page', () => {
        about.aboutUs()
        cy.get('.css-grdb1b').should('have.text', 'OUR VALUES').and('be.visible')

    })

})