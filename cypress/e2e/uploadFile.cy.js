describe("Upload file using Cypress",()=>{
    before(()=>{
        cy.visit("https://www.ilovepdf.com/pdf_to_word")
    })

    it("Drop File using Cypress",()=>{
        cy.get('.uploader__droptxt').selectFile('test.pdf',{action:"drag-drop"})
    })

    it("Pick File from fixtures", ()=>{
       cy.fixture('test2.pdf').as('pdf')
       cy.get('.uploader__droptxt').selectFile('@pdf',{action:"drag-drop"})    
       
    })

    it.only("Pick File from fixtures", ()=>{
        //cy.fixture('test2.pdf').as('pdf')
        cy.get('.uploader__droptxt').selectFile('Cypress/fixtures/test2.pdf',{action:"drag-drop"})    
        
     })

})