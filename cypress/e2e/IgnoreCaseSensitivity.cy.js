describe("Ingore Cae Sensitive text", ()=>{
    it("Ignore Case Sensitive",()=>{
        cy.visit("https://www.amazon.com")
        cy.contains("Customer SERvice", {matchCase: false}).should("be.visible")

        
    }
    )
})