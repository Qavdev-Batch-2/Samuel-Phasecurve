export class About {
    aboutUs(){
        cy.get('[href="/about"] > .chakra-text').click()
    }
}