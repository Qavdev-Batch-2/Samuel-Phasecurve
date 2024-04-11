import {about, contact, community, portfolio, programme, services} from "../fixtures/selectors.js"


describe('Automating Phasecurve Website', () => {


    beforeEach("should launch the URL", () => {
        cy.visit('/')
    })
    

    it('should click and launch on About Us', () => {
        cy.get(about.aboutUs).click()
        cy.contains('About Us') 
    })

    it('should click on Contact Us', () => {
         cy.get(contact.contactUs).click()
      
    })
  
    it('should click and launch the Community Page', () => {
        cy.get(community.ourCommunity).click()
        cy.contains('Community') 
    })

    it('should click and launch on Portfolio Page', () => {
        cy.get(portfolio.ourPortfolio).click()
        cy.contains('Portfolio') 
    })

    it('should click and launch on programme page', () => {
        cy.get(programme.ourProgramme).click()
        cy.contains('Programme') 
    })

    it('should click and launch Our Services Page', () => {
        cy.get(services.ourServices).click()
        cy.contains('Our Services') 
    })



})
