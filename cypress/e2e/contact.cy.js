
import {Contact} from "../page-objects/Contact.js"


describe('Automating Phasecurve', () => {
const contact = new Contact()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open on Contact Us Page', () => {
        contact.contactUs()
        cy.get('.chakra-button > .chakra-stack > .chakra-text').should('have.text', 'Get In touch').and('be.visible')

    })

})