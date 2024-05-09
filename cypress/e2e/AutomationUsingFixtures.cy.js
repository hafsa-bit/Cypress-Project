 //Data Driven Model
 
 
 import testData from '../fixtures/login.json'
 describe("Automation Using Cypress || Fixtures",()=>{
    let data;
     before(()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
        cy.fixture('login').then((value)=>{
            data=value;
        })

     })

     //Login without Fixtures
    it("login to Application without Fixture data",()=>{
        cy.get("input[name=email]").type("lambdatest.Cypress.disposable.com")
        cy.get("input[name=password").type("Cypress123!!")
        cy.get("input[type=submit").click()
    })

     //Login with Fixtures
     it("login to Application with Fixture data",()=>{
        cy.fixture('login').then((value)=>{
            cy.get("input[name=email]").type(value.email)
            cy.get("input[name=password").type(value.password)
            cy.get("input[type=submit").click()
        })
        
    })

    //Login with Fixtures by first storing data in a variable
    it("login to Application with Fixture data along with a variable",()=>{     
        cy.get("input[name=email]").type(data.email)
        cy.get("input[name=password").type(data.password)
        cy.get("input[type=submit").click()     
    })

   //Login with fixtures with first importing them
   it.only("login to Application using fixtures by importing them",()=>{
    cy.get("input[name=email]").type(testData.email)
    cy.get("input[name=password").type(testData.password)
    cy.get("input[type=submit").click()  
})
 })