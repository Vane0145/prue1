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
it.only("Suscribe for updates", () => {
  cy.getByData('["email-input"]').type("Vanessa")
  cy.getByData('["submit-botton"]').click()
  cy.getByData('["success-message"]').should("exist")

  


})


})