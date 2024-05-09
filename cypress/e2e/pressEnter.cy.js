describe("Press Enter in Cypress",()=>{
    before(()=>{
        cy.visit("https://www.google.com/")
    })

    it("Press enter",()=>{
        cy.get('#realbox').type("Cypress tricks {enter}")
    })
})
    