describe('template spec', () => {

it("the h1 contains the correct text", () => {
    cy.visit("https://example.cypress.io")
  })

 //it('xpath test', () => {
 // cy.visit('https://example.cypress.io')
 // cy.xpath('//h1').contains("Kitchen Sink")
 // cy.xpath('//h1').should('have.length', 1);
//});

it("the h1 contains the correct text", () => {
  cy.visit("http://localhost:3000")
  cy.get("h1")
})


})