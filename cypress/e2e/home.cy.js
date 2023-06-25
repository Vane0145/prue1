describe('First Homework', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")

  })

it.only("the features on the homepage are correct", () => {
  cy.get("dt").eq(1).contains("25+ Lessons")

})
it.only("the features on the homepage are correct", () => {
  cy.get("dt").eq(2).should("contain", "Free and Open Source")
})


})