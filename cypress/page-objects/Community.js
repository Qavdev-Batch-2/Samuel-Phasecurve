export class Community {
    ourCommunity(){
        cy.get('[href="/community"] > .chakra-text').click()
    }
}