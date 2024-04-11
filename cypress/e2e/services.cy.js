
import {Services} from "../page-objects/Services.js"


describe('Automating Phasecurve', () => {
const services = new Services()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open Services Page', () => {
        services.ourServices()
        cy.get('.css-1h3nf8l').should('include.text', 'Why Choose Phasecurve')
        cy.contains('OUR SERVICES').should('be.visible').and('include.text', 'SERVICES')

    })

})