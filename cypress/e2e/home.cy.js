describe('First Homework', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")

  })

it("the features on the homepage are correct", () => {
  cy.get("dt").eq(1).contains("25+ Lessons")

})
it("the features on the homepage are correct", () => {
  cy.get("dt").eq(2).should("contain", "Free and Open Source")
})
it("Suscribe for updates", () => {
  cy.get('[placeholder="Subscribe for Updates"]').type("Vanessa")
  cy.get('[value="Subscribe"]').click()
  cy.get('[data-test="success-message"]')



})


})