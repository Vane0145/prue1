

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
    cy.visit("http://localhost:3000") 
    })
    

it("alows users to suscribe to the email list", () =>{
    cy.getByData("email-input").type("canokarla034@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("canokarla034@gmail.com")
})
it("alows users to suscribe to the email list", () =>{
    cy.getByData("email-input").type("vane")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
})
it("alows users to suscribe to the email list", () =>{
    cy.getByData("email-input").type("canokarla034@gmail.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
    .should("exist")
    .contains("already exists. Please use a different email address")
})


})