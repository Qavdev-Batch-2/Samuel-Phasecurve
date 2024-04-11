
import {Portfolio} from "../page-objects/Portfolio.js"


describe('Automating Phasecurve', () => {
const portfolio = new Portfolio()

    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    
    it('should click and Open Portfolio Page', () => {
        portfolio.ourPortfolio()
        cy.contains('Some of our previous projects').should('be.visible').and('include.text', 'Some of our previous projects')

    })

})