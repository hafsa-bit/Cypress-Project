
describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("hero section", ()=>{
    it("allows users to subscribe to the email list", () => {
      cy.getByData("email-input").type("tom@aol.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })
  
    it("does NOT allow an invalid email address", () => {
      cy.getByData("email-input").type("tom")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })
  
    it("does NOT allow already subscribed email addresses", () => {
      cy.getByData("email-input").type("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("exist")
        .contains("already exists. Please use a different email address.")
    })
  
    context("Courses", ()=>{
      it.only("Get Started Section", ()=>{
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
      })
    })
  })
  
})
