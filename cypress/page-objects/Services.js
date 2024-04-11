export class Services {
    ourServices(){
        cy.get('[href="/services"] > .chakra-text').click()
    }

}