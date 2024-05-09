describe("Refresh Web Page",()=>{
    it("Refresh Page", ()=>{
        cy.visit("https://www.amazon.com")
        cy.contains("Customer Service").should("be.visible")
        cy.reload()
        cy.contains("Customer Service").should("be.visible")

        //Hard Reload

        cy.reload(true)
        cy.contains("Customer Service").should("be.visible")

        //By Defualt Reload() command waits for 60000 mili sec before it timeout

        cy.reload({timeout:5000})
        cy.contains("Customer Service").should("be.visible")


        //Reload By using JavaScript in built Function
        cy.window().then((data=>{
            data.location.reload
        }))

        cy.contains("Customer Service").should("be.visible")


    })
})