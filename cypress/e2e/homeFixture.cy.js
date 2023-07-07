


describe("Fixtures", function () {


    beforeEach(function(){

    cy.visit("http://localhost:3000") ;
    
    cy.fixture("fixtures/example1")
    .then(credentials =>{
        this.credentials =credentials

    })
    it("allow to susbcribe email",function(){
        cy.get("[]")

    })


    })
})