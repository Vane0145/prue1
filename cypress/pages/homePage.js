class homePage{


    elements ={
        emailInput : () => cy.getByData("email-input"),
        submitBtn : () => cy.getByData("submit-button"),
        successMessage : () => cy.getByData("success-message"),
        serverErrorMessage : () => cy.getByData("server-error-message")
    }


    clickOnSubmitBtn(){
        this.elements.submitBtn().click()
    }

    TypeUserName(email){
        this.elements.emailInput().type(email)
    }
}


module.exports = new homePage();