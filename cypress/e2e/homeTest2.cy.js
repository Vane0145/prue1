
import homePage from "../pages/homePage"


describe("Testing", () => {
    beforeEach(() => {
    cy.visit("http://localhost:3000") 

    })
    
    context("Hero Section", () => {
        it("allows users to suscribe to the email list", () =>{
            homePage.elements.emailInput().type("a@gcom")
            homePage.elements.submitBtn().click()
            homePage.elements.successMessage().should("exist").contains("a@gcom")
        })
        it("alows users to suscribe to the email list", () =>{
            homePage.elements.emailInput().type("vane")
            homePage.clickOnSubmitBtn()
            homePage.elements.successMessage().should("not.exist")
        })
        it.only("alows users to suscribe to the email list", () =>{
            homePage.TypeUserName("john@example.com")
            homePage.clickOnSubmitBtn()
            homePage.elements.serverErrorMessage().should("exist")
            
        })
    })

     context("Courses section", () => {
         it("Course: Testing Your First Next.js Application", () => {
            cy.getByData("course-0").find("a").contains("Get started").click()
            cy.location("pathname").should("equal", "/testing-your-first-application")
        })
 
     })

})