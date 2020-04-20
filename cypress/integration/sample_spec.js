describe('cjc.org search', function(){
    it('searches on the church website', function(){

        //by default cypress fails the test if there are any failures in the dom. This stops that 
        //functionality. Should be placed in settings file somewhere. 
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        //navigating to page
        cy.visit('www.churchofjesuschrist.org/')

        //verifying url 
        cy.url()
            .should('include', '/?lang=eng')

        //search
        cy.get('#PFsearchIcon').click()
        cy.get('input[aria-label="Search Form"]')
            .type('Joseph Smith')
            .should('have.value', 'Joseph Smith')
        cy.get('#PFsubmitSearch').click()

        //find result
        cy.contains('Joseph Smith Prophet of God')


    })
})