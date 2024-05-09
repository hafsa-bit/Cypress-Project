describe('View Port Test Cases', ()=>{

    it( '---TC1 ---', ()=>{
        cy.viewport('iphone-7')
        cy.visit('https://www.amazon.com')
    })   
})