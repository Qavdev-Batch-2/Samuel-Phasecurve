export class Portfolio {
    ourPortfolio(){
        cy.get('[href="/portfolio"] > .chakra-text').click()
    }

}