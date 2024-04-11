
import {Programme} from "../page-objects/Programme.js"


describe('Automating Phasecurve', () => {
const programme = new Programme()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open Programme Page', () => {
        programme.ourProgramme()
        cy.contains('TechElite').should('be.visible').and('include.text', 'TechElite')

    })

})