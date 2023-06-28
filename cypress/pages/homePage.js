class homePage{


    elements ={
        emailInput : () => cy.getByData("email-input"),
        submitBtn : () => cy.getByData("submit-button"),
        successMessage : () => cy.getByData("success-message")
    }


    clickOnSubmitBtn(){
        this.elements.submitBtn().click()
    }
}


module.exports = new homePage();