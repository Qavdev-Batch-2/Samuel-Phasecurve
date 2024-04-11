export class Contact {
    contactUs(){
        cy.get('[href="/contact"] > .chakra-text').click()
    }
}